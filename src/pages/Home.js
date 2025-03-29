import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OfferCard from '../components/OfferCard';
import Navbar from '../components/Navbar';
import './Home.css';

const API_URL = "https://travel-backend.onrender.com/api/offers";

function Home() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(res => setOffers(res.data))
      .catch(err => console.error('Error fetching offers:', err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h1 className="headline">✈️ חקרו את העולם איתנו</h1>
        <p className="intro-text"> :ההרפתקאה הבאה שלכם מתחילה כאן. מצאו את ההצעות שלנו</p>
  
        <div id="offers" className="anchor-offset"></div>

        
        <div id="offers" className="offers-grid">
          {offers.map(offer => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
  
        <div id="contact" className="contact-section">
          <h2>צרו קשר</h2>
          <p><a href="None">bookings@travelagency.com</a> :אימייל 📧</p>
          <p><a href="None">+123 456 7890</a> :טלפון 📞</p>
          <p className="note">!אנחנו פה לעזור לך לסגור את ההרפתקאה הבאה שלך. אמור לנו כיצד נוכל לעזור</p>
        </div>
      </div>
    </>
  );
  
}

export default Home;
