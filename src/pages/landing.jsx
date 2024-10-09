import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import landingImage from './landing.jpg'; // Adjust the path as per your structure

function LandingPage() {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState('');
  const fullText = 'Welcome to UR Store';

  const goToHome = () => {
    navigate('/products'); // Navigate to the Home page
  };

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust the speed of typing here (in milliseconds)

    return () => clearInterval(typingInterval); // Cleanup interval on unmount
  }, [fullText]);

  return (
    <div style={landingStyle}>
      <h1 style={title}>{typedText}</h1>
      <p style={paragraph}>Your one-stop shop for all your needs.</p>
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
  background: `url(${landingImage}) no-repeat center center`,
  backgroundSize: 'cover', // Makes the background image cover the entire area
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
const paragraph = {
  color:"white",
}
const title = {
  color:"white",
}
export default LandingPage;
