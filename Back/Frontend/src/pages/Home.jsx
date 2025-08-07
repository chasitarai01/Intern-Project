import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCogs, FaArchive, FaTruck, FaTwitter, FaFacebook, FaPinterest, FaLinkedin } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Banner Section */}
      <section className="banner">
        <div className="bannerContainer">
          <h1>Welcome to Gole's Restro</h1>
          <p>Delicious food delivered to your door in minutes</p>
          <div className="ctaContainer">
            <p>Order now and enjoy the best deals on your favorite dishes!</p>
            <Link to="/product" className="ctaButton">Explore Menu</Link>
          </div>
        </div>
      </section>

      {/* Stunning Features Section */}
      <section className="stunningFeatures">
        <h2 className="featuresTitle">Stunning Features</h2>
        <p className="featuresSubtitle">Remarkable Features that You Can Count!</p>
        <div className="featureGrid">
          <div className="featureCard">
            <span className="featureIcon">🍔🥤</span>
            <h3>Resonable Price</h3>
            <p>Start your business in cheap cost. In your budget</p>
          </div>
          <div className="featureCard">
            <span className="featureIcon">🚴‍♂️💨</span>
            <h3>Fast Delivery</h3>
            <p>Fastest delivery system to reach your customer.</p>
          </div>
          <div className="featureCard">
            <span className="featureIcon">💳</span>
            <h3>Easy Payment</h3>
            <p>Smart and easy payment system to maintain your business.</p>
          </div>
          <div className="featureCard">
            <span className="featureIcon">🎧</span>
            <h3>24h Support</h3>
            <p>24/7 customer support service to support you.</p>
          </div>
        </div>
      </section>

      {/* Explore Our Services Section */}
      <section className="exploreSection">
        <h2>Why Choose us?</h2>
        <div className="exploreGrid">
          <div className="exploreCard" onClick={() => navigate('/menu')}>
            <img src="https://i.pinimg.com/736x/a1/1c/ae/a11cae86cc40e816fe2341c20887a454.jpg" alt="Gole' Restro" />
            <div className="overlay">
              <h3>Find your daily meal</h3>
              <p>Delicious dishes waiting for you.</p>
            </div>
          </div>

          <div className="exploreCard" onClick={() => navigate('/about')}>
            <img src="https://business.getonbloc.com/wp-content/uploads/2020/09/restaurant_guest_engagement_customer_loyalty.jpg" alt="Gole' Restro" />
            <div className="overlay">
              <h3>Easy food ordering system</h3>
              <p>We value your precious time.</p>
            </div>
          </div>

          <div className="exploreCard" onClick={() => navigate('/contact')}>
            <img src="https://t3.ftcdn.net/jpg/02/38/38/02/360_F_238380251_ixhT9ei1G6s6wjx8f5tYpb2bLdQSDzkl.jpg" alt="Gole' Restro" />
            <div className="overlay">
              <h3>Fastest Food Delivery Services</h3>
              <p>We’re here to serve you better.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="featuresContainer">
          <div className="feature">
            <span className="icon"><FaCogs /></span>
            <h3>Easy Custom Orders</h3>
            <p>Personalize your meals just the way you like them.</p>
          </div>
          <div className="feature">
            <span className="icon"><FaArchive /></span>
            <h3>Fresh Ingredients</h3>
            <p>We use only the freshest and highest quality ingredients.</p>
          </div>
          <div className="feature">
            <span className="icon"><FaTruck /></span>
            <h3>Fast Delivery</h3>
            <p>Get your food delivered hot and on time, every time.</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletterContainer">
          <h3>Get Latest Offers</h3>
          <p>Subscribe to our newsletter and never miss a deal!</p>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Social Section */}
      <section className="socials">
        <div className="socialContainer">
          <h3>Follow Us</h3>
          <div className="socialIcons">
            <a href="#" className="socialIcon"><FaTwitter /></a>
            <a href="#" className="socialIcon"><FaFacebook /></a>
            <a href="#" className="socialIcon"><FaPinterest /></a>
            <a href="#" className="socialIcon"><FaLinkedin /></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footerContainer">
          <nav>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Support</a>
            <a href="#">Terms</a>
          </nav>
        </div>
      </footer>

      {/* Nude Theme Styles */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f9f4f0;
          color: #3c2f2f;
        }
        .banner {
          position: relative;
          background: url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1500&q=80') no-repeat center/cover;
          height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }
        .banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(60,47,47,0.5);
          z-index: 1;
        }
        .bannerContainer {
          position: relative;
          z-index: 2;
          max-width: 900px;
        }
        .banner h1 {
          font-size: 60px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .banner p {
          font-size: 22px;
          margin-bottom: 20px;
        }
        .ctaButton {
          background-color: #c2a189;
          color: white;
          padding: 15px 30px;
          border: none;
          border-radius: 30px;
          font-size: 18px;
          text-decoration: none;
          cursor: pointer;
        }
        .features {
          background-color: #f2e6e6;
          padding: 60px 20px;
        }
        .featuresContainer {
          max-width: 1200px;
          margin: auto;
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: space-around;
        }
        .feature {
          text-align: center;
          flex: 1 1 30%;
          padding: 20px;
          border-radius: 10px;
          background-color: #fffaf7;
          box-shadow: 0 0 10px rgba(90, 71, 71, 0.1);
        }
        .icon {
          font-size: 40px;
          margin-bottom: 10px;
          color: #c2a189;
        }
        .newsletter {
          background-color: #f2e6e6;
          padding: 60px 20px;
          text-align: center;
        }
        .newsletter input {
          padding: 12px;
          width: 300px;
          margin-right: 10px;
          border: 1px solid #ccc;
        }
        .newsletter button {
          padding: 12px 25px;
          background-color: #d9b3a9;
          color: white;
          border: none;
          border-radius: 5px;
        }
        .socials {
          background-color: #fff9f7;
          padding: 50px 0;
          text-align: center;
        }
        .socialIcons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }
        .socialIcon {
          font-size: 24px;
          color: #5a4747;
          background-color: #e6ccc9;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }
        .socialIcon:hover {
          background-color: #c2a189;
          color: white;
          transform: scale(1.1);
        }
        footer {
          background-color: #5a4747;
          color: white;
          padding: 20px;
          text-align: center;
        }
        footer nav a {
          color: white;
          margin: 0 10px;
          text-decoration: none;
        }
        footer nav a:hover {
          color: #d9b3a9;
        }
        .stunningFeatures {
          padding: 60px 20px;
          background-color: #fefaf8;
          text-align: center;
        }
        .featuresTitle {
          font-size: 36px;
          font-weight: bold;
          color: #c2a189;
          margin-bottom: 10px;
        }
        .featuresSubtitle {
          font-size: 18px;
          color: #5a4747;
          margin-bottom: 40px;
        }
        .featureGrid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }
        .featureCard {
          background: linear-gradient(to bottom right, #d9b3a9, #c2a189);
          color: white;
          padding: 30px 20px;
          width: 250px;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        .featureCard:hover {
          transform: translateY(-5px);
        }
        .featureIcon {
          font-size: 40px;
          margin-bottom: 16px;
          display: block;
        }
        .featureCard h3 {
          font-size: 20px;
          margin-bottom: 10px;
        }
        .featureCard p {
          font-size: 14px;
          line-height: 1.4;
        }
        .exploreSection {
          padding: 60px 20px;
          background-color: #f2e6e6;
          text-align: center;
        }
        .exploreSection h2 {
          font-size: 36px;
          color: #c2a189;
          margin-bottom: 40px;
        }
        .exploreGrid {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          justify-content: center;
        }
        .exploreCard {
          position: relative;
          width: 300px;
          height: 200px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        .exploreCard:hover {
          transform: scale(1.03);
        }
        .exploreCard img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(90,71,71,0.55);
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          text-align: center;
          padding: 20px;
        }
        .exploreCard:hover .overlay {
          opacity: 1;
        }
        .overlay h3 {
          font-size: 24px;
          margin-bottom: 10px;
        }
        .overlay p {
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}

export default Home;
