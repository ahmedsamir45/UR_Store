import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/products'); // Navigate to the Home page
  };

  return (
    <div style={landingStyle}>
      <h1>Welcome to UR Store</h1>
      <p>Your one-stop shop for all your needs.</p>
      <button onClick={goToHome} style={buttonStyle}>
        Go to Products
      </button>
    </div>
  );
}

const landingStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f5f5f5',
  textAlign: 'center',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: '#333',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  marginTop: '20px',
};

export default LandingPage;
