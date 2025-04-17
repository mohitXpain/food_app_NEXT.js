export default function SimpleCard({ 
  title, 
  description, 
  price 
}: { 
  title: string; 
  description: string; 
  price: number;
}) {
  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '0.5rem',
      padding: '1rem',
      margin: '1rem 0',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
    }}>
      <h3 style={{ 
        fontSize: '1.25rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem'
      }}>
        {title}
      </h3>
      <p style={{
        color: '#4a5568',
        marginBottom: '1rem',
        fontSize: '0.875rem'
      }}>
        {description}
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{
          fontWeight: 'bold',
          color: '#48bb78'
        }}>
          ${price.toFixed(2)}
        </span>
        <button style={{
          backgroundColor: '#ed8936',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '0.25rem',
          border: 'none',
          cursor: 'pointer'
        }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
} 