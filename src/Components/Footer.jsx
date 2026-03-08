import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.top}>
        {/* Brand */}
        <div style={styles.section}>
          <h2 style={styles.logo}>🐾 PetCare</h2>
          <p style={styles.text}>
            Bringing cute & lovable pets <br /> closer to your heart ❤️
          </p>
        </div>

        {/* Links */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Quick Links</h3>
          <Link style={styles.link} to="/">
            Home
          </Link>
          <Link style={styles.link} to="/addpet">
            Add Pet
          </Link>
          <Link style={styles.link} to="/contact">
            Contact
          </Link>
          <Link style={styles.link} to="/login">
            Login
          </Link>
        </div>

        {/* Contact */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Contact Us</h3>
          <p style={styles.text}>📧 petcare@gmail.com</p>
          <p style={styles.text}>📞 +91 98765 43210</p>
          <p style={styles.text}>📍 India</p>
        </div>
      </div>

      {/* Bottom */}
      <div style={styles.bottom}>
        © {new Date().getFullYear()} PetCare. All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#fff",
    marginTop: "60px",
    boxShadow: "0 -4px 10px rgba(0,0,0,0.08)",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    padding: "40px",
    flexWrap: "wrap",
  },
  section: {
    minWidth: "220px",
    marginBottom: "20px",
  },
  logo: {
    color: "#ff6f61",
    marginBottom: "10px",
  },
  heading: {
    marginBottom: "10px",
    color: "#333",
  },
  text: {
    color: "#555",
    fontSize: "14px",
    lineHeight: "1.6",
  },
  link: {
    display: "block",
    textDecoration: "none",
    color: "#555",
    marginBottom: "8px",
    fontSize: "14px",
  },
  bottom: {
    textAlign: "center",
    padding: "15px",
    backgroundColor: "#f9f9f9",
    fontSize: "14px",
    color: "#666",
  },
};

export default Footer;
