import React from "react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>🐾 PetCare</div>
      <ul style={styles.navList}>
        <li style={location.pathname === "/" ? styles.activeLink : {}}>
          <Link style={styles.link} to="/">
            Home
          </Link>
        </li>
        <li style={location.pathname === "/addpet" ? styles.activeLink : {}}>
          <Link style={styles.link} to="/addpet">
            Add Pet
          </Link>
        </li>
        <li style={location.pathname === "/contact" ? styles.activeLink : {}}>
          <Link style={styles.link} to="/contact">
            Contact
          </Link>
        </li>
        <li style={location.pathname === "/login" ? styles.activeLink : {}}>
          <Link style={styles.link} to="/login">
            Login
          </Link>
        </li>
        <li style={location.pathname === "/register" ? styles.activeLink : {}}>
          <Link style={styles.link} to="/register">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#f9f9f9",
    padding: "10px 30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#ff6f61",
    cursor: "default",
    userSelect: "none",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "25px",
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "600",
    fontSize: "16px",
  },
  activeLink: {
    borderBottom: "2px solid #ff6f61",
  },
};

export default Navbar;
