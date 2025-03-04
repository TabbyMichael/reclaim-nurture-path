
import React from "react";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { Link } from "react-router-dom";

const CommunitySupport = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-reclaim-blue/10 text-reclaim-blue mb-4 inline-block">
              Community Support
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Find Strength in Numbers
            </h2>
            <p className="text-xl text-reclaim-charcoal/70 mb-8">
              Connect with others on similar journeys, share experiences, and
              find the support you need to overcome challenges.
            </p>
            <Link to="/join-community">
              <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white px-8 py-6 h-auto text-lg rounded-xl">
                <Users className="mr-2 h-5 w-5" />
                Join Our Community
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Community Support Video"
                allowFullScreen
                className="rounded-2xl shadow-lg"
              ></iframe>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-reclaim-blue/10 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySupport;
