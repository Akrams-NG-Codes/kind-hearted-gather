
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { UserRound, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface Donor {
  id: number;
  name: string;
  amount: number;
  date: string;
  message?: string;
}

const recentDonors: Donor[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    amount: 150,
    date: "2 hours ago",
    message: "Keep up the amazing work!"
  },
  {
    id: 2,
    name: "Michael Chen",
    amount: 75,
    date: "5 hours ago"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    amount: 200,
    date: "Yesterday",
    message: "So happy to support this cause."
  },
  {
    id: 4,
    name: "David Kim",
    amount: 50,
    date: "2 days ago"
  },
  {
    id: 5,
    name: "Sophia Patel",
    amount: 100,
    date: "3 days ago",
    message: "Wishing you all the best!"
  }
];

const DonorList = () => {
  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  const getRandomColor = (id: number): string => {
    const colors = [
      "bg-purple-100 text-purple-700",
      "bg-blue-100 text-blue-700",
      "bg-pink-100 text-pink-700",
      "bg-green-100 text-green-700",
      "bg-amber-100 text-amber-700"
    ];
    return colors[id % colors.length];
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 mb-4">Recent Support</Badge>
            <h2 className="text-3xl font-bold mb-3">Recent Donors</h2>
            <p className="text-muted-foreground">
              Join these amazing people who have already supported our cause
            </p>
          </div>

          <Card className="border-purple-100 shadow-sm overflow-hidden">
            <CardHeader className="bg-white border-b border-purple-100 py-4">
              <CardTitle className="flex items-center text-lg gap-2">
                <Heart className="h-5 w-5 text-purple-500" />
                <span>Thank You to Our Supporters</span>
              </CardTitle>
              <CardDescription>Every donation makes a difference</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y divide-purple-100">
                {recentDonors.map((donor) => (
                  <li key={donor.id} className="p-4 hover:bg-purple-50/50 transition-colors">
                    <div className="flex items-start gap-3">
                      <Avatar className={cn("h-10 w-10 border", getRandomColor(donor.id))}>
                        <AvatarFallback className="text-sm">
                          {getInitials(donor.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start flex-wrap gap-2">
                          <div>
                            <h4 className="font-medium text-foreground">{donor.name}</h4>
                            <p className="text-xs text-muted-foreground">{donor.date}</p>
                          </div>
                          <span className="font-medium text-sm text-purple-600">
                            ${donor.amount}
                          </span>
                        </div>
                        {donor.message && (
                          <p className="mt-1 text-sm text-muted-foreground italic">
                            "{donor.message}"
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DonorList;
