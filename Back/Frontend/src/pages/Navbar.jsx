import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>
        <h2 style={styles.title}>Gole's Restro</h2>
      </div>

      <div style={styles.center}>
        <input
          type="text"
          placeholder="Search products..."
          style={styles.searchInput}
        />
        <button style={styles.searchButton}>Search</button>
      </div>

      <div style={styles.right}>
        <Link to="/Home" style={linkStyle}>Home</Link>
        <Link to="/product" style={linkStyle}>Products</Link>
        <Link to="/Contact" style={linkStyle}>Contact</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/register" style={linkStyle}>Register</Link>
        <Link to="/cart" style={styles.cartIcon}>🛒</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 24px',
    backgroundColor: '#faf3ef', // nude background
    color: '#5c4438',           // warm brown
    flexWrap: 'wrap'
  },
  left: {
    flex: '1'
  },
  title: {
    margin: 0,
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#5c4438'
  },
  center: {
    flex: '2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '6px'
  },
  right: {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '20px'
  },
  searchInput: {
    padding: '6px 10px',
    borderRadius: '4px 0 0 4px',
    border: '1px solid #e8d3c0',
    outline: 'none',
    color: '#5c4438'
  },
  searchButton: {
    padding: '6px 12px',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    backgroundColor: '#f5cba7',
    color: '#5c4438',
    cursor: 'pointer'
  },
  cartIcon: {
    fontSize: '20px',
    textDecoration: 'none',
    color: '#5c4438'
  }
};

const linkStyle = {
  color: '#5c4438',
  textDecoration: 'none',
  fontSize: '16px'
};

export default Navbar;
