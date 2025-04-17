"use client";

import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";

interface CartItemProps {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  onRemove: (id: string) => void;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
}

export default function CartItem({
  id,
  name,
  image,
  price,
  quantity,
  onRemove,
  onIncrement,
  onDecrement,
}: CartItemProps) {
  return (
    <div className="flex items-center border-b border-gray-200 py-4">
      <div className="relative w-20 h-20 flex-shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-md"
        />
      </div>
      
      <div className="flex-1 ml-4">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-600 text-sm">${price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center">
        <button 
          onClick={() => onDecrement(id)}
          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100"
          disabled={quantity <= 1}
        >
          <Minus size={16} />
        </button>
        
        <span className="mx-3 w-5 text-center">{quantity}</span>
        
        <button 
          onClick={() => onIncrement(id)}
          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100"
        >
          <Plus size={16} />
        </button>
      </div>
      
      <div className="ml-6 font-medium">
        ${(price * quantity).toFixed(2)}
      </div>
      
      <button 
        onClick={() => onRemove(id)}
        className="ml-4 text-gray-400 hover:text-red-500"
      >
        <X size={20} />
      </button>
    </div>
  );
} 