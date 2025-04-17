"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FoodFast</h3>
            <p className="text-gray-300 mb-4">
              Delicious food delivered fast to your doorstep.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/restaurants" className="text-gray-300 hover:text-white transition">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Cuisines</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cuisines/italian" className="text-gray-300 hover:text-white transition">
                  Italian
                </Link>
              </li>
              <li>
                <Link href="/cuisines/chinese" className="text-gray-300 hover:text-white transition">
                  Chinese
                </Link>
              </li>
              <li>
                <Link href="/cuisines/mexican" className="text-gray-300 hover:text-white transition">
                  Mexican
                </Link>
              </li>
              <li>
                <Link href="/cuisines/indian" className="text-gray-300 hover:text-white transition">
                  Indian
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center text-gray-300">
                <Mail size={18} className="mr-2" />
                support@foodfast.com
              </p>
              <p className="flex items-center text-gray-300">
                <Phone size={18} className="mr-2" />
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} FoodFast. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 