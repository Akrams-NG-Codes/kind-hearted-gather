
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProgressBar from "./ProgressBar";
import { HandCoins, Heart, TrendingUp, Users } from "lucide-react";

const Impact = () => {
  return (
    <section id="impact" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 mb-4">Our Impact</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Making Real Change Together</h2>
          <p className="text-muted-foreground">
            Your donations have a direct impact on our mission. Together, we've made significant progress.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-purple-100 shadow-sm hover-card-effect">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">12,500+</h3>
                  <p className="text-muted-foreground text-sm">People Helped</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-100 shadow-sm hover-card-effect">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <HandCoins className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">$285,740</h3>
                  <p className="text-muted-foreground text-sm">Funds Raised</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-100 shadow-sm hover-card-effect md:col-span-2 lg:col-span-1">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">47</h3>
                  <p className="text-muted-foreground text-sm">Community Projects</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 border-purple-100 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1 w-full">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">Current Goal Progress</h3>
                    <div className="flex items-center text-sm text-purple-600 font-medium">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span>73% Complete</span>
                    </div>
                  </div>
                  <ProgressBar value={73000} max={100000} />
                  <div className="mt-3 text-center">
                    <p className="text-sm text-muted-foreground">
                      Help us reach our goal of <span className="font-medium text-foreground">$100,000</span> by the end of the month!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Impact;
