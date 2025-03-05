
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.8.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface TrackingData {
  urge_level: number
  triggers: string[]
  coping_strategies: string[]
  success: boolean
  notes: string
  date: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Create a Supabase client with the Auth context of the user that called the function
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    )

    // Get the user data from their Supabase Auth session
    const {
      data: { user },
    } = await supabaseClient.auth.getUser()

    if (!user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 401 }
      )
    }

    // Fetch the last 7 days of user tracking data
    const { data: trackingData, error } = await supabaseClient
      .from('tracking')
      .select('urge_level, triggers, coping_strategies, success, notes, date')
      .eq('user_id', user.id)
      .order('date', { ascending: false })
      .limit(7)

    if (error) {
      console.error('Error fetching tracking data:', error)
      return new Response(
        JSON.stringify({ error: 'Failed to fetch tracking data' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

    // Generate insights based on the data
    const insights = generateInsights(trackingData as TrackingData[])

    return new Response(
      JSON.stringify({ insights }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (err) {
    console.error('Error processing request:', err)
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})

function generateInsights(trackingData: TrackingData[]) {
  if (!trackingData || trackingData.length === 0) {
    return {
      message: "We don't have enough data yet to provide insights. Keep tracking your progress!",
      triggers: [],
      strategies: [],
      progress: null
    }
  }

  // Analyze urge levels
  const urgeValues = trackingData.map(entry => entry.urge_level)
  const avgUrge = urgeValues.reduce((sum, val) => sum + val, 0) / urgeValues.length
  
  // Find common triggers
  const allTriggers = trackingData.flatMap(entry => entry.triggers || [])
  const triggerFrequency = allTriggers.reduce((acc, trigger) => {
    acc[trigger] = (acc[trigger] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  const commonTriggers = Object.entries(triggerFrequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([trigger]) => trigger)
  
  // Find effective strategies
  const successfulEntries = trackingData.filter(entry => entry.success)
  const allSuccessStrategies = successfulEntries.flatMap(entry => entry.coping_strategies || [])
  
  const strategyFrequency = allSuccessStrategies.reduce((acc, strategy) => {
    acc[strategy] = (acc[strategy] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  const effectiveStrategies = Object.entries(strategyFrequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([strategy]) => strategy)
  
  // Calculate success rate
  const successRate = trackingData.length > 0 
    ? (successfulEntries.length / trackingData.length) * 100 
    : 0
  
  // Determine progress trend
  let progressTrend = "steady"
  if (trackingData.length >= 3) {
    const recentUrges = trackingData.slice(0, 3).map(entry => entry.urge_level)
    const recentAvg = recentUrges.reduce((sum, val) => sum + val, 0) / recentUrges.length
    
    const olderUrges = trackingData.slice(Math.max(0, trackingData.length - 3)).map(entry => entry.urge_level)
    const olderAvg = olderUrges.reduce((sum, val) => sum + val, 0) / olderUrges.length
    
    if (recentAvg < olderAvg - 1) {
      progressTrend = "improving"
    } else if (recentAvg > olderAvg + 1) {
      progressTrend = "challenging"
    }
  }
  
  // Generate message
  let message = ""
  if (progressTrend === "improving") {
    message = `Great job! Your urge levels are trending down (avg: ${avgUrge.toFixed(1)}), and you've had a ${successRate.toFixed(0)}% success rate. Keep using strategies like ${effectiveStrategies.join(", ")}.`
  } else if (progressTrend === "challenging") {
    message = `This week seems more challenging with rising urge levels (avg: ${avgUrge.toFixed(1)}). Be mindful of triggers like ${commonTriggers.join(", ")} and try focusing on strategies that have worked for you before.`
  } else {
    message = `You're maintaining steady progress with an average urge level of ${avgUrge.toFixed(1)} and a ${successRate.toFixed(0)}% success rate. Keep being aware of your common triggers and using effective coping strategies.`
  }
  
  return {
    message,
    triggers: commonTriggers,
    strategies: effectiveStrategies,
    progress: {
      avgUrge,
      successRate,
      trend: progressTrend
    }
  }
}
