import { useLocation } from "react-router";
import { useState } from "react";

function AdoptForm() {
  const location = useLocation();
  const pet = location.state?.pet;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Adoption request submitted successfully ❤️");
  };

  return (
    <div style={styles.container}>
      <h1>Adopt Your Pet ❤️</h1>

      {pet && (
        <div style={styles.petBox}>
          <img src={pet.image} alt={pet.name} style={styles.image} />
          <h2>{pet.name}</h2>
          <p>{pet.breed}</p>
          <p>{pet.price}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
          style={styles.input}
        />

        <textarea
          name="address"
          placeholder="Address"
          required
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Submit Adoption Request
        </button>
      </form>
    </div>
  );
}

export default AdoptForm;

const styles = {
  container: {
    maxWidth: "500px",
    height: "650px",
    margin: "60px auto",
    padding: "40px",
    background: "#fff",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "15px",
  },

  petBox: {
    marginBottom: "25px",
  },

  image: {
    width: "180px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "10px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "15px",
  },

  button: {
    background: "#ff6f61",
    color: "white",
    padding: "14px",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "600",
  },
};
