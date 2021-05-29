import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './InfoLayout.css';

function InfoLayout({ title, children }) {
  return (
    <div className="infoLayout">
      <NavBar />
      <main className="infoLayout__content">
        <h1 className="infoLayout__title">{title}</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default InfoLayout;
