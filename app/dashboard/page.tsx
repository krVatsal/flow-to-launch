'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, MapPin, DollarSign, Calendar, FileText, Settings, ChartBar as BarChart3, Route, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const Dashboard = () => {
  const dashboardItems = [
    {
      title: "Weather",
      description: "Real-time weather forecast",
      icon: Cloud,
      gradient: "from-blue-400 to-blue-600",
      color: "text-blue-600"
    },
    {
      title: "Route",
      description: "Integrated map preview",
      icon: MapPin,
      gradient: "from-green-400 to-green-600",
      color: "text-green-600"
    },
    {
      title: "Cost Estimator",
      description: "Flights, hotels, transport",
      icon: DollarSign,
      gradient: "from-emerald-400 to-emerald-600",
      color: "text-emerald-600"
    },
    {
      title: "Events",
      description: "Concerts, festivals, activities",
      icon: Calendar,
      gradient: "from-purple-400 to-purple-600",
      color: "text-purple-600"
    },
    {
      title: "Trip Summary",
      description: "Collapsible with highlights",
      icon: FileText,
      gradient: "from-indigo-400 to-indigo-600",
      color: "text-indigo-600"
    }
  ];

  const sidebarItems = [
    { name: "Dashboard", icon: BarChart3, active: true },
    { name: "Itinerary", icon: Route, active: false },
    { name: "Events", icon: Calendar, active: false },
    { name: "Budget", icon: DollarSign, active: false },
    { name: "Settings", icon: Settings, active: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-travel-blue text-white p-6">
          <div className="mb-8">
            <h2 className="text-xl font-bold">Webster 2025</h2>
          </div>
          
          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-white hover:bg-white/10",
                    item.active && "bg-white/20"
                  )}
                >
                  <Icon className="mr-3 h-4 w-4" />
                  {item.name}
                </Button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold">Your Trip Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Everything you need for your upcoming adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={item.title}
                  className="group cursor-pointer transition-travel hover:shadow-travel hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={cn(
                        "p-3 rounded-xl bg-gradient-to-br",
                        item.gradient
                      )}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    
                    <CardHeader className="p-0">
                      <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-travel-blue to-travel-blue-dark text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/80">Next Trip</p>
                    <h3 className="text-2xl font-bold">Paris</h3>
                    <p className="text-white/80">in 12 days</p>
                  </div>
                  <Lightbulb className="h-8 w-8 text-white/80" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground">Total Budget</p>
                    <h3 className="text-2xl font-bold text-emerald-600">$2,840</h3>
                    <p className="text-muted-foreground">for 2 people</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-emerald-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground">Weather</p>
                    <h3 className="text-2xl font-bold text-blue-600">22°C</h3>
                    <p className="text-muted-foreground">Sunny</p>
                  </div>
                  <Cloud className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;