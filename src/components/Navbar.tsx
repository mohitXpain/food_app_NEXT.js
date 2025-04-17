"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-orange-500">
          FoodFast
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-orange-500 transition">
            Home
          </Link>
          <Link href="/restaurants" className="text-gray-700 hover:text-orange-500 transition">
            Restaurants
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-orange-500 transition">
            About
          </Link>
          <Link href="/cart" className="relative p-2">
            <ShoppingCart className="text-gray-700 hover:text-orange-500 transition" />
            <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 absolute w-full shadow-md">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-orange-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/restaurants" 
              className="text-gray-700 hover:text-orange-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Restaurants
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-orange-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/cart" 
              className="text-gray-700 hover:text-orange-500 transition flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart className="mr-2" size={20} />
              <span>Cart</span>
              <span className="ml-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 