// Sample data for restaurants
export const restaurants = [
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
export const cuisineCategories = [
  { id: "1", name: "Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=300&auto=format&fit=crop" },
  { id: "2", name: "Burgers", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=300&auto=format&fit=crop" },
  { id: "3", name: "Sushi", image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=300&auto=format&fit=crop" },
  { id: "4", name: "Chinese", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=300&auto=format&fit=crop" },
  { id: "5", name: "Mexican", image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=300&auto=format&fit=crop" },
  { id: "6", name: "Indian", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=300&auto=format&fit=crop" },
];

// Sample menu items for restaurant #1
export const menuItems = [
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
]; 