"use client";

// A simple component that doesn't rely on TypeScript
export default function SimpleComponent() {
  return (
    <div style={{
      padding: '20px',
      margin: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#ff5a1f', marginBottom: '10px' }}>
        Food Delivery App
      </h2>
      <p style={{ marginBottom: '15px' }}>
        Order delicious food from your favorite restaurants
      </p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        {['Pizza', 'Burgers', 'Sushi', 'Chinese'].map(cuisine => (
          <span key={cuisine} style={{
            padding: '5px 10px',
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '20px',
            fontSize: '14px'
          }}>
            {cuisine}
          </span>
        ))}
      </div>
      <button style={{
        marginTop: '15px',
        backgroundColor: '#ff5a1f',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Browse Restaurants
      </button>
    </div>
  );
} 