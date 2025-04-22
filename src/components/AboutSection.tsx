
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const AboutSection = () => {
  const initiatives = [
    "Community development projects in underserved areas",
    "Educational programs for children without access to quality education",
    "Healthcare initiatives for families in need",
    "Environmental sustainability projects to protect our planet",
    "Emergency relief during natural disasters and crises"
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 mb-4">About Our Mission</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Building a Better World Through Compassion and Action
            </h2>
            <p className="text-muted-foreground mb-6">
              Since our founding in 2015, GiveHope has been dedicated to creating meaningful change in communities around the world. 
              We believe that through collective giving and strategic action, we can address the most pressing challenges facing our society today.
            </p>
            <p className="text-muted-foreground mb-8">
              Our organization works closely with local leaders and experts to ensure that every dollar donated has the maximum impact. 
              By focusing on sustainable solutions, we create lasting change that continues to benefit communities for years to come.
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-4">Our Key Initiatives</h3>
              <ul className="space-y-3">
                {initiatives.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 h-5 w-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-purple-600" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-4 md:gap-6">
            <Card className="border-purple-100 shadow-md overflow-hidden">
              <div className="aspect-video bg-purple-50 w-full h-48 md:h-64 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-display font-bold text-purple-600">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Identify Needs</h3>
                  <p className="text-sm text-muted-foreground">
                    We work with communities to understand their most pressing challenges and opportunities.
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <Card className="border-purple-100 shadow-md overflow-hidden">
                <div className="aspect-video bg-purple-50 w-full h-40 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-xl font-display font-bold text-purple-600">2</span>
                    </div>
                    <h3 className="text-base font-semibold mb-1">Develop Solutions</h3>
                    <p className="text-xs text-muted-foreground">
                      Creating sustainable plans that address root causes.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-purple-100 shadow-md overflow-hidden">
                <div className="aspect-video bg-purple-50 w-full h-40 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-xl font-display font-bold text-purple-600">3</span>
                    </div>
                    <h3 className="text-base font-semibold mb-1">Take Action</h3>
                    <p className="text-xs text-muted-foreground">
                      Implementing programs with local partners for maximum impact.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
