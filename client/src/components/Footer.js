import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f26722', color: 'white', textAlign: 'center', padding: '20px 0', marginTop: '50px' }}>
      <p>&copy; {new Date().getFullYear()} Pet Adoption. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

