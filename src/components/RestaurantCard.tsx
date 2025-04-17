"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

interface RestaurantCardProps {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
}

export default function RestaurantCard({
  id,
  name,
  image,
  cuisine,
  rating,
  deliveryTime,
  deliveryFee,
}: RestaurantCardProps) {
  return (
    <Link href={`/restaurant/${id}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-600 text-sm">{cuisine}</p>
          
          <div className="flex items-center mt-2">
            <div className="flex items-center bg-green-50 px-2 py-1 rounded text-sm">
              <Star size={16} className="text-yellow-500 mr-1" />
              <span className="font-medium">{rating}</span>
            </div>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-gray-600 text-sm">{deliveryTime}</span>
          </div>
          
          <div className="mt-2 text-sm text-gray-500">
            Delivery fee: {deliveryFee}
          </div>
        </div>
      </div>
    </Link>
  );
} 