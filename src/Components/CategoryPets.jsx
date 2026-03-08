import { useParams } from "react-router";
import pets from "../data/petsData";


function CategoryPets() {
  const { type } = useParams();

  const filteredPets = pets.filter(
    (pet) => pet.type.toLowerCase() === type.toLowerCase(),
  );

  return (
   
    <div style={styles.container}>
      <h2 style={styles.title}>{type} Breeds</h2>

      <div style={styles.grid}>
        {filteredPets.map((pet, index) => (
          <div key={index} style={styles.card}>
            <img src={pet.image} alt={pet.name} style={styles.image} />
            <h3>{pet.name}</h3>
            <p style={styles.price}>{pet.price}</p>
          </div>
        ))}
      </div>
      {filteredPets.length === 0 && <p>No pets found</p>}
    </div>
  );
}

const styles = {
  //   card: {
  //     padding: "20px",
  //     margin: "15px 0",
  //     background: "white",
  //     borderRadius: "10px",
  //     boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  //   },

  container: {
    padding: "50px",
    textAlign: "center",
  },

  title: {
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "25px",
  },
  card: {
    background: "white",
    borderRadius: "20px",
    padding: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    transition: "0.3s",
  },

  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "15px",
    marginBottom: "10px",
  },

  price: {
    color: "#ff6f61",
    fontWeight: "bold",
  },
};

export default CategoryPets;
