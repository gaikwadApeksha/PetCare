import React, { useState } from "react";
import { useNavigate } from "react-router";

const petsData = [
  {
    name: "Golden Retriever",
    type: "Dog",
    price: "₹18,000",
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16",
  },
  {
    name: "Persian Cat",
    type: "Cat",
    price: "₹12,000",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6",
  },
  {
    name: "German Shepherd",
    type: "Dog",
    price: "₹20,000",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
  },
  {
    name: "White Rabbit",
    type: "Rabbit",
    price: "₹3,500",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c",
  },
  {
    name: "Parrot",
    type: "Bird",
    price: "₹2,500",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3",
  },
];

const AdoptPage = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const filteredPets = petsData.filter((pet) =>
    pet.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>🐾 Adopt Your New Friend</h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search pet..."
        style={styles.search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* PET GRID */}
      <div style={styles.grid}>
        {filteredPets.map((pet, index) => (
          <div key={index} style={styles.card}>
            <img src={pet.image} alt={pet.name} style={styles.image} />

            <div style={styles.info}>
              <h3>{pet.name}</h3>
              <p style={styles.type}>{pet.type}</p>
              <p style={styles.price}>{pet.price}</p>

              <button
                style={styles.adoptBtn}
                onClick={() => navigate("/adoptform", { state: { pet } })}
              >
                Adopt Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: "40px",
    background: "#f8f9fa",
    minHeight: "100vh",
    fontFamily: "Poppins, sans-serif",
  },

  heading: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#ff6f61",
  },

  search: {
    display: "block",
    margin: "0 auto 40px",
    padding: "12px 20px",
    width: "300px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    outline: "none",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
  },

  card: {
    background: "#fff",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
    transition: "0.3s",
  },

  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },

  info: {
    padding: "20px",
    textAlign: "center",
  },

  type: {
    color: "#ff6f61",
    fontWeight: "500",
  },

  price: {
    fontWeight: "bold",
    margin: "10px 0",
  },

  adoptBtn: {
    background: "#ff6f61",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default AdoptPage;
