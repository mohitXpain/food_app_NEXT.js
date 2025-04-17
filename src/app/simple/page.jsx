"use client";

import SimpleComponent from '@/components/SimpleComponent';
import RestaurantList from '@/components/RestaurantList';
import MenuItems from '@/components/MenuItems';

export default function SimplePage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '30px',
        color: '#333' 
      }}>
        Food Delivery App
      </h1>
      
      <SimpleComponent />
      <RestaurantList />
      <MenuItems />
      
      <div style={{ 
        marginTop: '30px', 
        padding: '20px', 
        backgroundColor: '#f9f9f9', 
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <p>This is a simple example without TypeScript dependencies.</p>
        <p style={{ marginTop: '10px', color: '#666' }}>
          © {new Date().getFullYear()} FoodFast
        </p>
      </div>
    </div>
  );
} 