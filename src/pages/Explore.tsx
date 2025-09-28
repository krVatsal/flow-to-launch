import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Send } from "lucide-react";
import { useState } from "react";
import DestinationCard from "@/components/Cards/DestinationCard";
import FeatureCard from "@/components/Cards/FeatureCard";
import { useNavigate } from "react-router-dom";

// Import destination images
import parisImage from "@/assets/paris.jpg";
import tokyoImage from "@/assets/tokyo.jpg";
import newYorkImage from "@/assets/new-york.jpg";
import londonImage from "@/assets/london.jpg";
import romeImage from "@/assets/rome.jpg";
import barcelonaImage from "@/assets/barcelona.jpg";

const Explore = () => {
  const [tripDescription, setTripDescription] = useState("");
  const navigate = useNavigate();

  const destinations = [
    { name: "Paris", image: parisImage },
    { name: "Tokyo", image: tokyoImage },
    { name: "New York", image: newYorkImage },
    { name: "London", image: londonImage },
    { name: "Rome", image: romeImage },
    { name: "Barcelona", image: barcelonaImage },
  ];

  const popularTrips = [
    {
      title: "Beach Getaway",
      description: "Relax on the sandy shores",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop"
    },
    {
      title: "Mountain Retreat",
      description: "Hike through scenic trails",
      image: "https://images.unsplash.com/photo-1464822759844-d150baec93d1?w=600&h=400&fit=crop"
    },
    {
      title: "City Exploration",
      description: "Discover vibrant city life",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop"
    }
  ];

  const handlePlanTrip = () => {
    if (tripDescription.trim()) {
      navigate("/planning");
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Plan your next adventure</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Tell us your travel dreams, and our AI will craft the perfect itinerary for you.
          </p>

          {/* Trip Planning Input */}
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 p-2 bg-background border rounded-2xl shadow-card">
              <Input
                placeholder="Describe your perfect trip... e.g., 'A sunny beach vacation in Greece for 10 days'"
                value={tripDescription}
                onChange={(e) => setTripDescription(e.target.value)}
                className="flex-1 border-0 text-lg h-14 bg-transparent focus-visible:ring-0"
                onKeyPress={(e) => e.key === 'Enter' && handlePlanTrip()}
              />
              <Button 
                variant="travel" 
                size="lg"
                onClick={handlePlanTrip}
                disabled={!tripDescription.trim()}
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Suggested Destinations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Suggested destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.name}
                name={destination.name}
                image={destination.image}
                onClick={() => navigate(`/compare?destinations=${destination.name}`)}
              />
            ))}
          </div>
        </section>

        {/* Popular Trips */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Popular trips</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {popularTrips.map((trip) => (
              <FeatureCard
                key={trip.title}
                title={trip.title}
                description={trip.description}
                image={trip.image}
                buttonText="Explore"
                onButtonClick={() => navigate("/planning")}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Explore;