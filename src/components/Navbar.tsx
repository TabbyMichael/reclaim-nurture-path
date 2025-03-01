
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-reclaim-blue flex items-center justify-center">
                <span className="text-white font-semibold text-sm">R</span>
              </div>
              <span className="font-semibold text-xl tracking-tight text-reclaim-charcoal">
                Reclaim
              </span>
            </a>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-reclaim-charcoal/80 hover:text-reclaim-blue transition-colors">
              Features
            </a>
            <a href="#recovery" className="text-reclaim-charcoal/80 hover:text-reclaim-blue transition-colors">
              Recovery Paths
            </a>
            <a href="#community" className="text-reclaim-charcoal/80 hover:text-reclaim-blue transition-colors">
              Community
            </a>
            <a href="#support" className="text-reclaim-charcoal/80 hover:text-reclaim-blue transition-colors">
              Support
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-reclaim-blue text-reclaim-blue hover:bg-reclaim-blue/10"
            >
              Log in
            </Button>
            <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-reclaim-charcoal p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md overflow-hidden animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#features"
              className="block px-4 py-3 rounded-md text-reclaim-charcoal hover:bg-reclaim-lightBlue/20 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#recovery"
              className="block px-4 py-3 rounded-md text-reclaim-charcoal hover:bg-reclaim-lightBlue/20 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Recovery Paths
            </a>
            <a
              href="#community"
              className="block px-4 py-3 rounded-md text-reclaim-charcoal hover:bg-reclaim-lightBlue/20 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Community
            </a>
            <a
              href="#support"
              className="block px-4 py-3 rounded-md text-reclaim-charcoal hover:bg-reclaim-lightBlue/20 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Support
            </a>
            <div className="pt-2 space-y-2">
              <Button
                variant="outline"
                className="w-full border-reclaim-blue text-reclaim-blue hover:bg-reclaim-blue/10"
              >
                Log in
              </Button>
              <Button className="w-full bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
