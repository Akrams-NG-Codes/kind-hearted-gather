
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Heart, Instagram, Linkedin, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You've successfully subscribed to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-gray-50 pt-16 pb-6 border-t border-gray-200">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-purple-500" />
              <span className="text-xl font-display font-bold">GiveHope</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Making a difference through your generous donations. Together, we can build a better world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#donate" className="text-muted-foreground hover:text-purple-600 transition-colors">
                  Donate Now
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
                  Volunteer
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-3">
              <p>123 Charity Lane</p>
              <p>New York, NY 10001</p>
              <p>
                <a href="tel:+15551234567" className="hover:text-purple-600 transition-colors">
                  +1 (555) 123-4567
                </a>
              </p>
              <p>
                <a href="mailto:info@givehope.org" className="hover:text-purple-600 transition-colors">
                  info@givehope.org
                </a>
              </p>
            </address>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with our latest projects and opportunities to make an impact.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} GiveHope. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
