// Header.js

import React , { useState }    from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// library.add(faInstagram);

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (value) => {
    setActiveLink(value);
  };

  const getLinkStyle = (linkValue) => {
    return {
      color: '#fff',
      marginRight: '10px',
      textDecoration: 'none',
      fontSize: '20px',
      background: activeLink === linkValue ? 'black' : 'transparent',
      padding: '5px 10px',
      borderRadius: '5px',
    };
  };
  

  return (
    <header style={headerStyle}>
      <div style={leftSectionStyle}>
        <Link  style={getLinkStyle('shop')}
         onClick={() => handleLinkClick('shop')}>Shop</Link>


        <Link  style={getLinkStyle('contact')}
          onClick={() => handleLinkClick('contact')}>
        Contact</Link>


        <Link  style={getLinkStyle('home')}
          onClick={() => handleLinkClick('home')}>
        Home</Link>


      </div>

      <div style={centerSectionStyle}>
       <Link to="/" style={logoStyle} onClick={() => handleLinkClick('home')}> <h1> EverlastWears</h1></Link>
      </div>

      <div style={rightSectionStyle}>
        <a href="https://www.instagram.com/everlastwears" target="_blank" rel="noopener noreferrer" style={instagramButtonStyle}>
          {/* <img src="./Images/Untitled-2.jpg" alt="Instagram" style={imageStyle} />   */}
        </a>
      
        <Link  style={getLinkStyle('about')}
          onClick={() => handleLinkClick('about')}>About</Link>
      </div>
    </header>
  );
};

// Styles




const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  background: '#333',
  color: '#fff',
};


const imageStyle = {
  width: '30px', // Adjust the width as needed
  height: '30px', // Adjust the height as needed
  borderRadius: '50%', // Optional: Create a circular shape
};


const leftSectionStyle = {
  display: 'flex',
};

const linkStyle = {
  color: '#fff',
  marginRight: '10px',
  textDecoration: 'none',
  fontSize: '20px',
};

const linkStyleRight = {
    color: '#fff',
    marginLeft: '10px',
    textDecoration: 'none',
    fontSize: '20px',
  };

const centerSectionStyle = {
    flex: '1',
    textAlign: 'center',

  };
  
  const logoStyle = {
    margin: '0',
    color: '#fff',
    textDecoration: 'none',
  };
  
  const rightSectionStyle = {
    textAlign: 'right',
  };
  
  const instagramButtonStyle = {
    padding: '5px 10px',
    background: '#fff',
    color: 'black',
    textDecoration: 'none',
    borderRadius: '5px',
  };
  
  export default Header;