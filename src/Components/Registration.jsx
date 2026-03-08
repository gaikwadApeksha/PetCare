import React, { useState } from "react";
import { useNavigate } from "react-router";

const Registration = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Registered user: ${form.name}`);
    navigate("/login"); // redirect to login after registration
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Register at PetCare</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Full Name:
          <br />
          <input
            style={styles.input}
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </label>
        <label style={styles.label}>
          Email:
          <br />
          <input
            style={styles.input}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
          />
        </label>
        <label style={styles.label}>
          Password:
          <br />
          <input
            style={styles.input}
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            placeholder="Enter password"
          />
        </label>
        <label style={styles.label}>
          Confirm Password:
          <br />
          <input
            style={styles.input}
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Confirm password"
          />
        </label>
        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "60px auto",
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    color: "#444",
  },
  title: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#ff6f61",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    fontWeight: "600",
    fontSize: "1rem",
  },
  input: {
    marginTop: "5px",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
    width:"380px"
  },
  button: {
    backgroundColor: "#ff6f61",
    color: "white",
    padding: "12px",
    fontWeight: "700",
    fontSize: "1rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default Registration;
