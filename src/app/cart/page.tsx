"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CreditCard, Truck, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartItem from "@/components/CartItem";

// Sample cart data
const initialCartItems = [
  {
    id: "1",
    name: "Pepperoni Pizza",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600&auto=format&fit=crop",
    price: 12.99,
    quantity: 1,
    restaurantId: "1",
    restaurantName: "Pizza Paradise",
  },
  {
    id: "3",
    name: "Spaghetti Carbonara",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=600&auto=format&fit=crop",
    price: 13.99,
    quantity: 2,
    restaurantId: "1",
    restaurantName: "Pizza Paradise",
  },
];

// Delivery options
const deliveryOptions = [
  { id: "standard", label: "Standard Delivery", fee: 2.99, time: "20-35 min", icon: Truck },
  { id: "express", label: "Express Delivery", fee: 4.99, time: "10-20 min", icon: Clock },
];

// Payment methods
const paymentMethods = [
  { id: "card", label: "Credit/Debit Card", icon: CreditCard },
  { id: "paypal", label: "PayPal", icon: CreditCard },
  { id: "cash", label: "Cash on Delivery", icon: CreditCard },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [selectedDelivery, setSelectedDelivery] = useState(deliveryOptions[0].id);
  const [selectedPayment, setSelectedPayment] = useState(paymentMethods[0].id);
  
  // Calculate cart summary
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryFee = deliveryOptions.find(option => option.id === selectedDelivery)?.fee || 0;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + deliveryFee + tax;
  
  // Remove item from cart
  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  // Increment item quantity
  const handleIncrementItem = (id: string) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };
  
  // Decrement item quantity
  const handleDecrementItem = (id: string) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-orange-500">
              <ArrowLeft size={18} className="mr-2" />
              Continue Shopping
            </Link>
          </div>
          
          <h1 className="text-2xl font-bold mb-8">Your Cart</h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
              <Link 
                href="/restaurants" 
                className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition"
              >
                Browse Restaurants
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items */}
              <div className="lg:w-2/3">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <h2 className="font-semibold text-lg">{cartItems[0].restaurantName}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {cartItems.map(item => (
                      <CartItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        quantity={item.quantity}
                        onRemove={handleRemoveItem}
                        onIncrement={handleIncrementItem}
                        onDecrement={handleDecrementItem}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:w-1/3">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Delivery Fee</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  {/* Delivery Options */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Delivery Options</h3>
                    <div className="space-y-2">
                      {deliveryOptions.map(option => (
                        <label key={option.id} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="delivery"
                            value={option.id}
                            checked={selectedDelivery === option.id}
                            onChange={() => setSelectedDelivery(option.id)}
                            className="mr-3"
                          />
                          <div className="flex-1">
                            <div className="flex items-center">
                              <option.icon size={16} className="mr-2 text-gray-600" />
                              <span className="font-medium">{option.label}</span>
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                              ${option.fee.toFixed(2)} • {option.time}
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Payment Methods */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Payment Method</h3>
                    <div className="space-y-2">
                      {paymentMethods.map(method => (
                        <label key={method.id} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="payment"
                            value={method.id}
                            checked={selectedPayment === method.id}
                            onChange={() => setSelectedPayment(method.id)}
                            className="mr-3"
                          />
                          <div className="flex items-center">
                            <method.icon size={16} className="mr-2 text-gray-600" />
                            <span className="font-medium">{method.label}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Checkout Button */}
                  <button className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-600 transition">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 