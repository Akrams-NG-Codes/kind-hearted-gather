
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-purple-500" />
          <span className="text-xl font-display font-bold">GiveHope</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Home
          </a>
          <a href="#about" className="text-sm font-medium hover:text-purple-600 transition-colors">
            About
          </a>
          <a href="#impact" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Impact
          </a>
          <a href="#donate" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Donate
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="default"
            size="sm"
            className="bg-purple-600 hover:bg-purple-700 font-medium"
            onClick={() => {
              document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Donate Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
