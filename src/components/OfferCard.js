import React from 'react';
import { Link } from 'react-router-dom';
import './OfferCard.css';


function OfferCard({ offer }) {
  return (
    <Link to={`/offer/${offer.id}`} className="offer-card">
        <img
        src={offer.image_url}
        alt={offer.title}
        onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/400x200?text=No+Image";
        }}
        />
      <div className="card-info">
        <h3>{offer.title}</h3>
        <p>{offer.description.substring(0, 80)}...</p>
        <strong>${Number(offer.price).toFixed(2)}</strong>
      </div>
    </Link>
  );
}

export default OfferCard;
