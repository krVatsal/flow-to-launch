'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Sparkles, ArrowRight, Send } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Explore = () => {
  const [destination, setDestination] = useState("");
  const [step, setStep] = useState(1);
  const [chatMessages, setChatMessages] = useState<Array<{role: 'user' | 'ai', content: string}>>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [showItinerary, setShowItinerary] = useState(false);
  const router = useRouter();

  const handleNext = () => {
    if (destination.trim()) {
      setStep(2);
      // Start chat with initial message
      setChatMessages([
        { role: 'ai', content: `Great! You want to visit ${destination}. Let me help you plan the perfect trip. What type of experience are you looking for?` }
      ]);
    }
  };

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      setChatMessages(prev => [...prev, { role: 'user', content: currentMessage }]);
      setCurrentMessage("");
      
      // Simulate AI response
      setTimeout(() => {
        setChatMessages(prev => [...prev, { 
          role: 'ai', 
          content: "Based on your preferences, I'm creating a personalized itinerary for you. This will include the best places to visit, activities, and local recommendations!"
        }]);
        
        // Show itinerary after a few messages
        if (chatMessages.length > 2) {
          setTimeout(() => setShowItinerary(true), 2000);
        }
      }, 1000);
    }
  };

  const handleCompare = () => {
    router.push("/compare?generated=true");
  };

  if (step === 1) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-lg">
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium text-muted-foreground">Step 1 of 3</p>
                    <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
                      <Search className="h-4 w-4" />
                      <span>Destination</span>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-travel-blue h-2 rounded-full" style={{ width: "33%" }}></div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-2">Where do you want to go?</h2>
                  <p className="text-muted-foreground">Let our AI help you plan the perfect trip.</p>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input
                    className="pl-12 pr-12 py-4 text-lg"
                    placeholder="e.g., Paris, France"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleNext()}
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                    <Sparkles className="h-4 w-4 text-travel-blue animate-pulse" />
                  </div>
                </div>
                
                <div className="flex justify-end pt-4">
                  <Button 
                    variant="travel" 
                    size="lg"
                    onClick={handleNext}
                    disabled={!destination.trim()}
                    className="gap-2"
                  >
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Chat Interface */}
      <div className="flex-1 max-w-4xl mx-auto w-full p-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Planning your trip to {destination}</h1>
          <p className="text-muted-foreground">Let's create the perfect itinerary together</p>
        </div>

        {/* Chat Messages */}
        <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
          {chatMessages.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.role === 'user' 
                  ? 'bg-travel-blue text-white' 
                  : 'bg-muted text-foreground'
              }`}>
                {message.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <Input
            placeholder="Tell me about your travel preferences..."
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} variant="travel">
            <Send className="h-4 w-4" />
          </Button>
        </div>

        {/* Itinerary Generated */}
        {showItinerary && (
          <Card className="mt-8 border-travel-blue">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2">🎉 Your itinerary is ready!</h3>
                <p className="text-muted-foreground mb-4">
                  I've created a personalized {destination} itinerary based on your preferences.
                </p>
                <div className="flex gap-3 justify-center">
                  <Button variant="travel" onClick={() => router.push("/planning")}>
                    View Itinerary
                  </Button>
                  <Button variant="travel-outline" onClick={handleCompare}>
                    Compare Destinations
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Explore;