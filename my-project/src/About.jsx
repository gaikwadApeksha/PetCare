function About() {
  return (
    <div style={styles.container}>
      <h2>About Us</h2>

      <p>
        Welcome to <b>PetCare Shop</b>. We love pets and treat them like family.
        Our goal is to provide healthy pets, quality food, and trusted pet
        accessories.
      </p>

      <p>
        We have experienced staff who guide pet owners about proper care,
        nutrition, and grooming of pets.
      </p>

      <p>Our mission is to make every pet happy, healthy, and safe.</p>
    </div>
  );
}

const styles = {
  container: {
    width: "500px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
  },
};

export default About;
