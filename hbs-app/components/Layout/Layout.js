import React from 'react';
import Header from '../Header/Header'; // Your Header component
import Footer from '../Footer/Footer'; // Your Footer component
import './Layout.css'; // Import your stylesheet


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
