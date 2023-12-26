import React from 'react';
import Header from '../Header/Header'; // Your Header component
import Footer from '../Footer/Footer'; // Your Footer component

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
