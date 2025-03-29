import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './OfferPage.css';

const API_URL = "https://travel-backend-hld3.onrender.com/api/offers";

function OfferPage() {
  const { id } = useParams();
  const [offer, setOffer] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    axios.get(`${API_URL}/${id}`)
      .then(res => setOffer(res.data))
      .catch(err => console.error('Error loading offer:', err));
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post("https://travel-backend-hld3.onrender.com/api/book", {
        name: form.name,
        email: form.email,
        phone: form.phone,
        offerTitle: offer.title,
      });
  
      alert("✅ בקשה נשלחה!");
      setForm({ name: '', email: '', phone: '' });
    } catch (err) {
      console.error("Booking error:", err);
      alert("❌ לא יכלנו לשלוח את הבקשה. אנא נסו שוב.");
    }
  };

  if (!offer) return <p>טוען...</p>;

  return (
    <div className="offer-detail-container">
      <img src={offer.image_url} alt={offer.title} />
      <h2>{offer.title}</h2>
      <p>{offer.description}</p>
      <h3>${Number(offer.price).toFixed(2)}</h3>

      <form onSubmit={handleSubmit} className="booking-form">
        <h4>שלחו בקשה</h4>
        <input name="name" placeholder="שם" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="אימייל" value={form.email} onChange={handleChange} required />
        <input name="phone" placeholder="מספר טלפון" value={form.phone} onChange={handleChange} required />
        <button type="submit">שלח בקשה</button>
      </form>
    </div>
  );
}

export default OfferPage;
