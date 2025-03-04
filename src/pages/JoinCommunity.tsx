import React from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Users, CheckCircle, MessageSquare } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const JoinCommunity = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-reclaim-sand px-4">
      <div className="absolute top-6 left-6">
        <Button
          variant="ghost"
          className="flex items-center text-reclaim-charcoal hover:bg-reclaim-blue/10"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
        </Button>
      </div>

      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <Link to="/" className="inline-flex items-center">
            <div className="w-10 h-10 rounded-full bg-reclaim-blue flex items-center justify-center mr-2">
              <span className="text-white font-semibold text-lg">R</span>
            </div>
            <span className="font-semibold text-2xl tracking-tight text-reclaim-charcoal">
              Reclaim
            </span>
          </Link>
        </div>

        <Card className="border-reclaim-charcoal/10 shadow-medium">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Join Our Community
            </CardTitle>
            <CardDescription className="text-center">
              Connect with others on your journey to recovery
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-full bg-reclaim-blue/10">
                <Users className="h-6 w-6 text-reclaim-blue" />
              </div>
              <div>
                <p className="font-semibold text-lg text-reclaim-charcoal">
                  Supportive Environment
                </p>
                <p className="text-sm text-reclaim-charcoal/70">
                  Find encouragement and understanding.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-full bg-reclaim-blue/10">
                <CheckCircle className="h-6 w-6 text-reclaim-blue" />
              </div>
              <div>
                <p className="font-semibold text-lg text-reclaim-charcoal">
                  Shared Experiences
                </p>
                <p className="text-sm text-reclaim-charcoal/70">
                  Learn from others who understand what you're going through.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-full bg-reclaim-blue/10">
                <MessageSquare className="h-6 w-6 text-reclaim-blue" />
              </div>
              <div>
                <p className="font-semibold text-lg text-reclaim-charcoal">
                  Expert Advice
                </p>
                <p className="text-sm text-reclaim-charcoal/70">
                  Access tips and resources from professionals.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
              Join the Community
            </Button>
            <p className="text-center text-sm text-reclaim-charcoal/70">
              Already a member?{" "}
              <Link to="/login" className="text-reclaim-blue hover:underline">
                Log in
              </Link>
            </p>
          </CardFooter>
        </Card>

        <div className="mt-8 text-center px-4">
          <p className="text-xs text-reclaim-charcoal/50">
            By joining, you agree to our{" "}
            <Link to="/terms" className="text-reclaim-blue hover:underline">
              Community Guidelines
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-reclaim-blue hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
