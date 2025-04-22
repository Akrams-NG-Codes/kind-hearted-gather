
import { Button } from "@/components/ui/button";
import { HeartHandshake } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home"
      className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom right, rgba(139, 92, 246, 0.1), rgba(167, 139, 250, 0.05))"
      }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
            <HeartHandshake className="h-4 w-4" />
            <span>Making a difference together</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Help Us Create a <span className="text-purple-600">Better World</span> For All
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our mission to bring positive change through targeted donations that make a real impact. Every contribution counts towards building a better tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8"
              onClick={() => {
                document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Donate Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-purple-200 hover:bg-purple-50 text-foreground font-semibold"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-6xl h-24 bg-gradient-to-b from-transparent to-background z-20" />
    </section>
  );
};

export default Hero;
