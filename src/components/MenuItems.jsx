"use client";

import { menuItems } from '@/data/sampleData';

export default function MenuItems() {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '30px auto',
      padding: '20px'
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px'
      }}>
        Menu Items
      </h2>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        {menuItems.map(item => (
          <div key={item.id} style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fff',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              position: 'relative',
              height: '200px',
              width: '100%'
            }}>
              <img 
                src={item.image} 
                alt={item.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            <div style={{ 
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flex: '1'
            }}>
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
                }}>
                  <h3 style={{ 
                    fontSize: '18px', 
                    fontWeight: 'bold'
                  }}>
                    {item.name}
                  </h3>
                  <p style={{
                    fontWeight: '500',
                    color: '#22c55e'
                  }}>
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <p style={{ 
                  color: '#6b7280', 
                  fontSize: '14px',
                  marginTop: '8px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: '2',
                  WebkitBoxOrient: 'vertical'
                }}>
                  {item.description}
                </p>
              </div>
              
              <button style={{
                marginTop: '16px',
                backgroundColor: '#ff5a1f',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'flex-start',
                cursor: 'pointer'
              }}>
                <span style={{ marginLeft: '4px' }}>Add to cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 