
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Calendar, User, Tag, Clock, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "The Science Behind Habit Formation in Recovery",
    excerpt: "Discover how neuroscience explains the formation of habits and how this knowledge can be applied to recovery journeys.",
    author: "Dr. Sarah Johnson",
    date: "May 15, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["Science", "Habits", "Neuroscience"]
  },
  {
    id: 2,
    title: "5 Mindfulness Practices to Support Your Recovery",
    excerpt: "Learn practical mindfulness techniques that can help you stay present and manage cravings during recovery.",
    author: "Michael Chen",
    date: "April 28, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["Mindfulness", "Meditation", "Wellness"]
  },
  {
    id: 3,
    title: "Building a Supportive Community During Recovery",
    excerpt: "The importance of social connections in the recovery process and how to cultivate a supportive network.",
    author: "Aisha Williams",
    date: "April 10, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
    tags: ["Community", "Support", "Relationships"]
  },
  {
    id: 4,
    title: "The Role of Physical Exercise in Addiction Recovery",
    excerpt: "How regular physical activity can support brain chemistry, reduce cravings, and improve overall well-being during recovery.",
    author: "Dr. James Rodriguez",
    date: "March 22, 2023",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["Exercise", "Physical Health", "Wellness"]
  }
];

const popularTags = [
  "Recovery", "Mindfulness", "Mental Health", "Wellness", "Self-Care", 
  "Community", "Habits", "Support", "Meditation", "Therapy"
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-reclaim-sand">
      <Navbar />
      <div className="pt-24 md:pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-reclaim-charcoal mb-4">
              Reclaim Blog
            </h1>
            <p className="text-reclaim-charcoal/70 max-w-2xl mx-auto">
              Insights, stories, and resources to support your recovery journey
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <div className="lg:w-2/3">
              {/* Featured post */}
              <div className="relative rounded-2xl overflow-hidden mb-12 glass-card">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-reclaim-charcoal/90"></div>
                <img 
                  src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Person writing in journal"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
                  <div className="flex items-center mb-3 text-sm">
                    <Badge className="bg-reclaim-blue text-white">Featured</Badge>
                    <span className="mx-2">•</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>May 20, 2023</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Journaling as a Recovery Tool: How Writing Heals</h2>
                  <p className="text-white/80 mb-4 max-w-2xl">
                    Explore how the simple practice of daily journaling can become a powerful ally in your recovery journey, helping to process emotions and track progress.
                  </p>
                  <div className="flex items-center text-sm">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">By Dr. Rachel Green</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>10 min read</span>
                  </div>
                </div>
              </div>

              {/* Blog post grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="glass-card overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} className="bg-reclaim-blue/10 text-reclaim-blue hover:bg-reclaim-blue/20">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-reclaim-charcoal">{post.title}</h3>
                      <p className="text-reclaim-charcoal/70 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-reclaim-charcoal/60">
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mb-12">
                <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                  Load More Articles
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="glass-card rounded-xl p-6 mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-reclaim-charcoal/50" />
                  <Input 
                    placeholder="Search articles..." 
                    className="pl-10 border-reclaim-charcoal/20 bg-white"
                  />
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-lg mb-4 text-reclaim-charcoal">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="flex items-center justify-between text-reclaim-charcoal/70 hover:text-reclaim-blue transition-colors py-2">
                      <span>Recovery Stories</span>
                      <Badge className="bg-reclaim-blue/10 text-reclaim-blue">24</Badge>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center justify-between text-reclaim-charcoal/70 hover:text-reclaim-blue transition-colors py-2">
                      <span>Mental Health</span>
                      <Badge className="bg-reclaim-blue/10 text-reclaim-blue">18</Badge>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center justify-between text-reclaim-charcoal/70 hover:text-reclaim-blue transition-colors py-2">
                      <span>Wellness Tips</span>
                      <Badge className="bg-reclaim-blue/10 text-reclaim-blue">32</Badge>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center justify-between text-reclaim-charcoal/70 hover:text-reclaim-blue transition-colors py-2">
                      <span>Science & Research</span>
                      <Badge className="bg-reclaim-blue/10 text-reclaim-blue">15</Badge>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center justify-between text-reclaim-charcoal/70 hover:text-reclaim-blue transition-colors py-2">
                      <span>Community Building</span>
                      <Badge className="bg-reclaim-blue/10 text-reclaim-blue">21</Badge>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-lg mb-4 text-reclaim-charcoal">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Badge 
                      key={index}
                      className="bg-reclaim-blue/10 text-reclaim-blue hover:bg-reclaim-blue/20 cursor-pointer"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-4 text-reclaim-charcoal">Newsletter</h3>
                <p className="text-reclaim-charcoal/70 mb-4">
                  Stay updated with our latest articles, stories, and resources to support your recovery journey.
                </p>
                <Input
                  placeholder="Your email address"
                  className="mb-3 border-reclaim-charcoal/20 bg-white"
                />
                <Button className="w-full bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
