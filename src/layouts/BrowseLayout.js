import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './BrowseLayout.css';

function BrowseLayout({ children }) {
  return (
    <div className="browseLayout">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default BrowseLayout;
