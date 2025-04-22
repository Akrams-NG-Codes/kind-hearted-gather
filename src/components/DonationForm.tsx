
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Check, DollarSign, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DonationForm = () => {
  const [amount, setAmount] = useState<number | string>(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const { toast } = useToast();
  
  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Donation successful!",
        description: `Thank you for your $${amount} donation, ${name}. You're making a difference!`,
        duration: 5000,
      });
      
      // Reset form
      setAmount(50);
      setCustomAmount("");
      setName("");
      setEmail("");
    }, 1500);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setCustomAmount("");
      setAmount(50);
    } else {
      const numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        setCustomAmount(value);
        setAmount(numValue);
      }
    }
  };

  const handleAmountSelection = (value: string) => {
    setAmount(parseInt(value, 10));
    setCustomAmount("");
  };

  return (
    <section id="donate" className="py-16 md:py-20 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 mb-4">Support Our Cause</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Make a Donation Today</h2>
            <p className="text-muted-foreground">Your generosity helps us continue our mission to create a better world for all.</p>
          </div>

          <Card className="border-purple-100 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-purple-500" />
                <span>Support Our Mission</span>
              </CardTitle>
              <CardDescription>
                Choose an amount to donate. All donations are secure and encrypted.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleDonate}>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="donation-amount" className="text-base font-medium mb-3 block">
                      Select Donation Amount
                    </Label>
                    <RadioGroup
                      defaultValue="50"
                      value={customAmount ? "custom" : amount.toString()}
                      onValueChange={handleAmountSelection}
                      className="grid grid-cols-2 gap-4 sm:grid-cols-4"
                    >
                      {[25, 50, 100, 250].map((value) => (
                        <div key={value} className="relative">
                          <RadioGroupItem
                            value={value.toString()}
                            id={`amount-${value}`}
                            className="sr-only"
                          />
                          <Label
                            htmlFor={`amount-${value}`}
                            className={`flex items-center justify-center h-14 rounded-md border-2 hover-card-effect cursor-pointer ${
                              amount === value && !customAmount
                                ? "border-purple-500 bg-purple-50 text-purple-700 font-medium"
                                : "border-border bg-card hover:border-purple-200 hover:bg-purple-50/50"
                            }`}
                          >
                            ${value}
                            {amount === value && !customAmount && (
                              <Check className="h-4 w-4 ml-2 text-purple-500" />
                            )}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>

                    <div className="mt-4 relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground donation-symbol" />
                      <Input
                        id="custom-amount"
                        type="text"
                        placeholder="Custom Amount"
                        className="pl-10 donation-input"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                      />
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-base font-medium mb-2 block">
                        Your Name
                      </Label>
                      <Input 
                        id="name"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-base font-medium mb-2 block">
                        Email Address
                      </Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        We'll send your donation receipt to this email
                      </p>
                    </div>
                  </div>
                </div>

                <CardFooter className="flex flex-col px-0 pt-6 pb-0 mt-6">
                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 h-12 text-base"
                    disabled={isSubmitting || !amount || !name || !email}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      `Donate $${amount}`
                    )}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-3">
                    Secure payment processing. All information is encrypted.
                  </p>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DonationForm;
