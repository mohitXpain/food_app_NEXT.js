"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Clock, MapPin, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FoodItemCard from "@/components/FoodItemCard";

// Sample data for the restaurant
const restaurant = {
  id: "1",
  name: "Pizza Paradise",
  image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1200&auto=format&fit=crop",
  cuisines: ["Italian", "Pizza", "Pasta"],
  rating: 4.8,
  ratings: 253,
  deliveryTime: "20-35 min",
  deliveryFee: "$0.99",
  minOrder: "$10.00",
  address: "123 Main Street, Cityville",
  distance: "1.2 miles away",
};

// Sample data for menu categories
const menuCategories = [
  "Popular Items",
  "Pizzas",
  "Pastas",
  "Salads",
  "Desserts",
  "Drinks",
];

// Sample data for menu items
const menuItems = [
  {
    id: "1",
    name: "Pepperoni Pizza",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600&auto=format&fit=crop",
    price: 12.99,
    description: "Classic pepperoni pizza with our signature sauce and mozzarella cheese.",
    category: "Pizzas",
    popular: true,
  },
  {
    id: "2",
    name: "Margherita Pizza",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600&auto=format&fit=crop",
    price: 10.99,
    description: "Fresh tomatoes, mozzarella cheese, basil, salt, and extra-virgin olive oil.",
    category: "Pizzas",
    popular: true,
  },
  {
    id: "3",
    name: "Spaghetti Carbonara",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=600&auto=format&fit=crop",
    price: 13.99,
    description: "Spaghetti pasta with a creamy sauce made from eggs, cheese, pancetta, and black pepper.",
    category: "Pastas",
    popular: true,
  },
  {
    id: "4",
    name: "Caesar Salad",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=600&auto=format&fit=crop",
    price: 8.99,
    description: "Fresh romaine lettuce, croutons, parmesan cheese, and our house-made Caesar dressing.",
    category: "Salads",
    popular: false,
  },
  {
    id: "5",
    name: "Garlic Bread",
    image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=600&auto=format&fit=crop",
    price: 4.99,
    description: "Crusty baguette slices topped with garlic butter and herbs, toasted to perfection.",
    category: "Popular Items",
    popular: true,
  },
  {
    id: "6",
    name: "Tiramisu",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=600&auto=format&fit=crop",
    price: 6.99,
    description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream.",
    category: "Desserts",
    popular: false,
  },
];

export default function RestaurantPage({ params }: { params: { id: string } }) {
  const [selectedCategory, setSelectedCategory] = useState("Popular Items");
  const [cart, setCart] = useState<string[]>([]);

  // Function to add an item to the cart
  const handleAddToCart = (id: string) => {
    setCart([...cart, id]);
  };

  // Filter menu items based on selected category
  const filteredItems = selectedCategory === "Popular Items"
    ? menuItems.filter(item => item.popular)
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Restaurant Header */}
        <div className="relative h-72 w-full">
          <Image
            src={restaurant.image}
            alt={restaurant.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="container mx-auto">
              <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                <div className="flex items-center">
                  <Star size={16} className="text-yellow-400 mr-1" />
                  <span className="font-medium">{restaurant.rating}</span>
                  <span className="text-gray-300 ml-1">({restaurant.ratings})</span>
                </div>
                <span className="text-gray-300">•</span>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  {restaurant.deliveryTime}
                </div>
                <span className="text-gray-300">•</span>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-1" />
                  {restaurant.distance}
                </div>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {restaurant.cuisines.map((cuisine, index) => (
                  <span key={index} className="bg-white bg-opacity-20 text-white text-xs px-2 py-1 rounded">
                    {cuisine}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Restaurant Info */}
        <div className="container mx-auto px-4 py-6">
          <div className="bg-white shadow-md rounded-lg p-4 mb-8">
            <div className="flex flex-wrap gap-4 justify-between">
              <div className="flex items-center">
                <Clock size={16} className="text-gray-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-600">Delivery Time</p>
                  <p className="font-medium">{restaurant.deliveryTime}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                  <span className="text-gray-600 text-sm">$</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Delivery Fee</p>
                  <p className="font-medium">{restaurant.deliveryFee}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                  <span className="text-gray-600 text-sm">$</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Minimum Order</p>
                  <p className="font-medium">{restaurant.minOrder}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin size={16} className="text-gray-600 mr-2" />
                <div>
                  <p className="text-sm text-gray-600">Address</p>
                  <p className="font-medium">{restaurant.address}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Search */}
          <div className="mb-8 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for dishes..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          
          {/* Menu Categories */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-2 min-w-max">
              {menuCategories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Menu Items */}
          <div>
            <h2 className="text-xl font-bold mb-4">{selectedCategory}</h2>
            <div className="space-y-6">
              {filteredItems.map((item) => (
                <FoodItemCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  description={item.description}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 