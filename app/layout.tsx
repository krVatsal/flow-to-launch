import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryProvider } from './providers/react-query-provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Webster - Smart Travel Planner',
  description: 'AI-powered travel planning with smart itineraries, cost analysis, weather forecasts, and event discovery. Plan your perfect trip with Webster.',
  authors: [{ name: 'Webster Travel' }],
  keywords: ['travel planning', 'AI travel', 'smart itineraries', 'trip planner', 'travel assistant'],
  openGraph: {
    title: 'Webster - Smart Travel Planner',
    description: 'AI-powered travel planning with smart itineraries, cost analysis, weather forecasts, and event discovery.',
    type: 'website',
    images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@lovable_dev',
    images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}