"use client";

import Image from "next/image";
import { Plus } from "lucide-react";

interface FoodItemCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  onAddToCart: (id: string) => void;
}

export default function FoodItemCard({
  id,
  name,
  image,
  price,
  description,
  onAddToCart,
}: FoodItemCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <div className="relative w-full md:w-1/3 h-48 md:h-auto">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="font-medium text-green-600">${price.toFixed(2)}</p>
          </div>
          <p className="text-gray-600 mt-2 text-sm line-clamp-2">{description}</p>
        </div>
        <button
          onClick={() => onAddToCart(id)}
          className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-orange-600 transition"
        >
          <Plus size={18} className="mr-1" />
          Add to cart
        </button>
      </div>
    </div>
  );
} 