"use client";

import { restaurants } from '@/data/sampleData';

export default function RestaurantList() {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px'
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px'
      }}>
        Featured Restaurants
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {restaurants.map(restaurant => (
          <div key={restaurant.id} style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }}>
            <div style={{
              height: '180px',
              position: 'relative'
            }}>
              <img 
                src={restaurant.image} 
                alt={restaurant.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            <div style={{ padding: '16px' }}>
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: 'bold',
                marginBottom: '4px'
              }}>
                {restaurant.name}
              </h3>
              
              <p style={{ 
                color: '#6b7280', 
                fontSize: '14px',
                marginBottom: '8px'
              }}>
                {restaurant.cuisine}
              </p>
              
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                marginTop: '8px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#f0fdf4',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}>
                  <span style={{ color: '#f59e0b', marginRight: '4px' }}>★</span>
                  <span style={{ fontWeight: 'medium' }}>{restaurant.rating}</span>
                </div>
                
                <span style={{ margin: '0 8px', color: '#d1d5db' }}>•</span>
                
                <span style={{ color: '#6b7280', fontSize: '14px' }}>
                  {restaurant.deliveryTime}
                </span>
              </div>
              
              <div style={{ 
                marginTop: '8px',
                fontSize: '14px',
                color: '#6b7280'
              }}>
                Delivery fee: {restaurant.deliveryFee}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 