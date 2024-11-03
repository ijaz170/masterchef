import React from 'react';
import { useNavigate } from 'react-router-dom';
import imageUrl from "../../../Assets/shop now.jpg";

const MenuHero = () => {
  // Hardcoded data for the featured product
  const product = {
    id: 1,
    name: 'Great Lighting Keyboard',
    price: '$129.99',
    imageUrl: imageUrl // Assigning the imported image directly
  };

  const navigate = useNavigate();

  return (
    <section className="hero-banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1>"Bite into happiness, one burger at a time"</h1>
          <p>"Savour the flavour, love at first bite!"</p>
          <button className="cta-button" onClick={() => navigate("/product/6053576088")}>
            Order Now
          </button>
        </div>
        <div className="banner-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
      </div>
    </section>
  );
};

export default MenuHero;
