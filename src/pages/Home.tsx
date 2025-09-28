import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-travel.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative container mx-auto text-center">
          <div className="inline-block px-4 py-2 mb-6 bg-travel-blue/20 backdrop-blur-sm rounded-full">
            <span className="text-white font-medium">WEBSTER 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Smart Travel Planner
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            AI-powered itineraries with cost, weather, and events in one place. 
            Your next adventure, intelligently planned.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="travel" size="lg">
              <Link to="/explore">
                Start Planning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="travel-outline" size="lg">
              <Link to="/dashboard">View Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Preview Smart Features</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to plan the perfect trip
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-4 mb-6 inline-block">
                <div className="w-16 h-16 bg-orange-200 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">AI Reminders</h3>
              <p className="text-gray-700 mb-4">
                Get smart reminders for your travel plans, including flight updates, 
                gate changes, and more.
              </p>
              <Button variant="travel-ghost">View Reminders</Button>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-4 mb-6 inline-block">
                <div className="w-16 h-16 bg-blue-200 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📅</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Upcoming Trips</h3>
              <p className="text-gray-700 mb-4">
                View your upcoming trips and travel details directly from your calendar.
              </p>
              <Button variant="travel-ghost">View Trips</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-travel-blue to-travel-blue-light">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Connect your calendar to receive AI-powered travel reminders and updates.
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Never miss a beat. Connect your calendar to automatically sync your travel plans.
          </p>
          <Button variant="travel-outline" size="lg" className="bg-white text-travel-blue hover:bg-white/90">
            Connect Calendar
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;