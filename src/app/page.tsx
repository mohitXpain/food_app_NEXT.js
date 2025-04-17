"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RestaurantCard from "@/components/RestaurantCard";

// Sample data for featured restaurants
const featuredRestaurants = [
  {
    id: "1",
    name: "Pizza Paradise",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=600&auto=format&fit=crop",
    cuisine: "Italian • Pizza",
    rating: 4.8,
    deliveryTime: "20-35 min",
    deliveryFee: "$0.99",
  },
  {
    id: "2",
    name: "Burger Kingdom",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
    cuisine: "American • Burgers",
    rating: 4.5,
    deliveryTime: "15-30 min",
    deliveryFee: "$1.99",
  },
  {
    id: "3",
    name: "Sushi Central",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=600&auto=format&fit=crop",
    cuisine: "Japanese • Sushi",
    rating: 4.7,
    deliveryTime: "25-40 min",
    deliveryFee: "$2.99",
  },
  {
    id: "4",
    name: "Taco Terrific",
    image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=600&auto=format&fit=crop",
    cuisine: "Mexican • Tacos",
    rating: 4.3,
    deliveryTime: "15-25 min",
    deliveryFee: "$1.49",
  },
];

// Sample data for cuisine categories
const cuisineCategories = [
  { id: "1", name: "Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=300&auto=format&fit=crop" },
  { id: "2", name: "Burgers", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=300&auto=format&fit=crop" },
  { id: "3", name: "Sushi", image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=300&auto=format&fit=crop" },
  { id: "4", name: "Chinese", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=300&auto=format&fit=crop" },
  { id: "5", name: "Mexican", image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=300&auto=format&fit=crop" },
  { id: "6", name: "Indian", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=300&auto=format&fit=crop" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Delicious food delivered to your door
                </h1>
                <p className="text-lg mb-6">
                  Choose from thousands of restaurants and get your favorite meals delivered fast.
                </p>
                
                <div className="relative bg-white rounded-full shadow-lg p-1 flex items-center max-w-xl">
                  <div className="pl-4 text-gray-500">
                    <Search size={20} />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your delivery address"
                    className="w-full py-3 px-4 bg-transparent outline-none text-gray-700"
                  />
                  <button className="bg-orange-500 text-white py-3 px-6 rounded-full font-medium hover:bg-orange-600 transition">
                    Find Food
                  </button>
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12">
                <div className="relative h-80 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?q=80&w=800&auto=format&fit=crop"
                    alt="Food delivery"
                    fill
                    className="object-cover rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Cuisine Categories */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Explore by Cuisine</h2>
              <Link href="/cuisines" className="text-orange-500 flex items-center hover:underline">
                See all <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {cuisineCategories.map((cuisine) => (
                <Link key={cuisine.id} href={`/cuisines/${cuisine.id}`} className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-32 w-full">
                      <Image
                        src={cuisine.image}
                        alt={cuisine.name}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    <div className="p-3 text-center">
                      <h3 className="font-medium">{cuisine.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Restaurants */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Featured Restaurants</h2>
              <Link href="/restaurants" className="text-orange-500 flex items-center hover:underline">
                See all <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredRestaurants.map((restaurant) => (
                <RestaurantCard 
                  key={restaurant.id}
                  id={restaurant.id}
                  name={restaurant.name}
                  image={restaurant.image}
                  cuisine={restaurant.cuisine}
                  rating={restaurant.rating}
                  deliveryTime={restaurant.deliveryTime}
                  deliveryFee={restaurant.deliveryFee}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* App Download Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">
                  Download the FoodFast App
                </h2>
                <p className="text-gray-600 mb-6">
                  Get the full experience. Order food, track delivery in real-time, and more.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-black text-white py-3 px-6 rounded-lg flex items-center">
                    <div className="mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.707 10.708L16.586 9.587L13 13.172L9.414 9.586L8.293 10.707L13 15.414L17.707 10.708Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs">Download on the</div>
                      <div className="text-xl font-semibold">App Store</div>
                    </div>
                  </button>
                  <button className="bg-black text-white py-3 px-6 rounded-lg flex items-center">
                    <div className="mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.5 10.526l8.25 8.179L21 4.181M3.5 12.886l4.125 4.09M12.875 4.836L7.625 10.05" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-xl font-semibold">Google Play</div>
                    </div>
                  </button>
                </div>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className="relative h-96 w-64">
                  <Image
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=500&auto=format&fit=crop"
                    alt="FoodFast mobile app"
                    fill
                    className="object-cover rounded-3xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 