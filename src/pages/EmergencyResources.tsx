
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Phone, MapPin, AlertTriangle, Clock, ExternalLink, Lifebuoy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";

const EmergencyResources = () => {
  return (
    <div className="min-h-screen bg-reclaim-sand">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <section className="bg-reclaim-charcoal py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="inline-block p-2 bg-white/10 rounded-full mb-6">
              <AlertTriangle className="h-8 w-8 text-reclaim-teal" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Emergency Resources
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Immediate support resources for crisis situations
            </p>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-4 inline-block">
              <p className="text-white/90 font-medium mb-2">In immediate danger?</p>
              <Button size="lg" className="bg-reclaim-teal hover:bg-reclaim-teal/90 text-white">
                <Phone className="mr-2 h-5 w-5" />
                Call 911 (US) Now
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-xl shadow-medium p-6 md:p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-6">Find Local Resources</h2>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-reclaim-charcoal/50" />
                  <Input 
                    type="text"
                    placeholder="Enter your zip code or city" 
                    className="pl-10 h-12" 
                  />
                </div>
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-reclaim-charcoal/50" />
                  <Input 
                    type="text"
                    placeholder="Type of support needed" 
                    className="pl-10 h-12" 
                  />
                </div>
                <Button className="h-12 bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                  Search
                </Button>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-reclaim-charcoal mb-8">
                National Crisis Hotlines
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="overflow-hidden border-reclaim-charcoal/10">
                  <div className="bg-reclaim-blue/10 px-6 py-4">
                    <h3 className="font-semibold text-xl text-reclaim-blue">Suicide & Crisis Lifeline</h3>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <div className="mb-4 md:mb-0">
                        <div className="font-semibold text-2xl mb-1">988</div>
                        <div className="text-reclaim-charcoal/70">Call or Text</div>
                      </div>
                      <div className="flex items-center gap-2 text-reclaim-charcoal/70">
                        <Clock className="h-4 w-4" />
                        <span>Available 24/7</span>
                      </div>
                    </div>
                    <p className="text-reclaim-charcoal/70 mb-4">
                      The 988 Lifeline provides free and confidential emotional support to people in suicidal crisis or emotional distress.
                    </p>
                    <div className="flex justify-between">
                      <Button variant="outline" className="text-reclaim-blue border-reclaim-blue hover:bg-reclaim-blue/10">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </Button>
                      <Button variant="ghost" className="text-reclaim-charcoal/70 hover:text-reclaim-blue">
                        Visit Website <ExternalLink className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border-reclaim-charcoal/10">
                  <div className="bg-reclaim-teal/10 px-6 py-4">
                    <h3 className="font-semibold text-xl text-reclaim-teal">SAMHSA's Helpline</h3>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <div className="mb-4 md:mb-0">
                        <div className="font-semibold text-2xl mb-1">1-800-662-4357</div>
                        <div className="text-reclaim-charcoal/70">HELP</div>
                      </div>
                      <div className="flex items-center gap-2 text-reclaim-charcoal/70">
                        <Clock className="h-4 w-4" />
                        <span>Available 24/7</span>
                      </div>
                    </div>
                    <p className="text-reclaim-charcoal/70 mb-4">
                      SAMHSA's National Helpline provides treatment referral and information services for individuals facing mental health or substance use disorders.
                    </p>
                    <div className="flex justify-between">
                      <Button variant="outline" className="text-reclaim-teal border-reclaim-teal hover:bg-reclaim-teal/10">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </Button>
                      <Button variant="ghost" className="text-reclaim-charcoal/70 hover:text-reclaim-teal">
                        Visit Website <ExternalLink className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="overflow-hidden border-reclaim-charcoal/10">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">National Domestic Violence Hotline</h3>
                    <div className="font-medium mb-1">1-800-799-7233</div>
                    <div className="text-sm text-reclaim-charcoal/70 mb-3">Available 24/7</div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border-reclaim-charcoal/10">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">National Sexual Assault Hotline</h3>
                    <div className="font-medium mb-1">1-800-656-4673</div>
                    <div className="text-sm text-reclaim-charcoal/70 mb-3">Available 24/7</div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border-reclaim-charcoal/10">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">Veterans Crisis Line</h3>
                    <div className="font-medium mb-1">1-800-273-8255 (Press 1)</div>
                    <div className="text-sm text-reclaim-charcoal/70 mb-3">Available 24/7</div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-reclaim-charcoal mb-8">
                Specialized Support Resources
              </h2>
              
              <Tabs defaultValue="addiction">
                <TabsList className="mb-6 bg-white/50">
                  <TabsTrigger value="addiction">Addiction</TabsTrigger>
                  <TabsTrigger value="mental-health">Mental Health</TabsTrigger>
                  <TabsTrigger value="eating-disorders">Eating Disorders</TabsTrigger>
                  <TabsTrigger value="lgbtq">LGBTQ+</TabsTrigger>
                </TabsList>
                
                <TabsContent value="addiction" className="space-y-6">
                  <Card className="overflow-hidden border-reclaim-charcoal/10">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                          <h3 className="font-semibold text-xl mb-2">Alcoholics Anonymous</h3>
                          <p className="text-reclaim-charcoal/70 mb-4">
                            Fellowship of individuals who share their experience, strength and hope with each other to recover from alcoholism.
                          </p>
                          <Button variant="outline" className="w-full">
                            Find Local Meetings
                          </Button>
                        </div>
                        <div className="md:w-1/3">
                          <h3 className="font-semibold text-xl mb-2">Narcotics Anonymous</h3>
                          <p className="text-reclaim-charcoal/70 mb-4">
                            Community-based organization for recovering drug addicts, with meetings around the world.
                          </p>
                          <Button variant="outline" className="w-full">
                            Find Local Meetings
                          </Button>
                        </div>
                        <div className="md:w-1/3">
                          <h3 className="font-semibold text-xl mb-2">SMART Recovery</h3>
                          <p className="text-reclaim-charcoal/70 mb-4">
                            Global community of mutual-support groups using science-based, self-empowering approach to recovery.
                          </p>
                          <Button variant="outline" className="w-full">
                            Find Local Meetings
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="mental-health">
                  <Card className="overflow-hidden border-reclaim-charcoal/10">
                    <CardContent className="p-6">
                      <p className="mb-4">Mental health specialized resources would appear here</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="eating-disorders">
                  <Card className="overflow-hidden border-reclaim-charcoal/10">
                    <CardContent className="p-6">
                      <p className="mb-4">Eating disorder specialized resources would appear here</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="lgbtq">
                  <Card className="overflow-hidden border-reclaim-charcoal/10">
                    <CardContent className="p-6">
                      <p className="mb-4">LGBTQ+ specialized resources would appear here</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="bg-reclaim-charcoal text-white rounded-2xl overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="md:w-2/3">
                    <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                      <Lifebuoy className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      In-App Emergency Support
                    </h2>
                    <p className="text-white/80 mb-6">
                      Remember that Reclaim offers an Emergency Support feature directly within the app. This provides immediate access to coping strategies, distraction techniques, and direct contact with support resources.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="bg-reclaim-teal hover:bg-reclaim-teal/90 text-white">
                        <AlertTriangle className="mr-2 h-5 w-5" />
                        Use Panic Button
                      </Button>
                      <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                        Learn More
                      </Button>
                    </div>
                  </div>
                  <div className="md:w-1/3 bg-white/5 rounded-xl p-6">
                    <h3 className="font-medium text-lg mb-4">Immediate Coping Strategies</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="bg-white/10 rounded-full min-w-7 h-7 flex items-center justify-center mt-0.5">
                          <span className="text-sm font-medium">1</span>
                        </div>
                        <span>Deep breathing - 4 counts in, hold 4, 4 counts out</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-white/10 rounded-full min-w-7 h-7 flex items-center justify-center mt-0.5">
                          <span className="text-sm font-medium">2</span>
                        </div>
                        <span>5-4-3-2-1 grounding technique (see, touch, hear, smell, taste)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-white/10 rounded-full min-w-7 h-7 flex items-center justify-center mt-0.5">
                          <span className="text-sm font-medium">3</span>
                        </div>
                        <span>Splash cold water on your face to activate parasympathetic system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-white/10 rounded-full min-w-7 h-7 flex items-center justify-center mt-0.5">
                          <span className="text-sm font-medium">4</span>
                        </div>
                        <span>Text "HOME" to 741741 to reach Crisis Text Line</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EmergencyResources;
