import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router";

const pets = [
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
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW4TRbMISsLa1tkd73jO-Asi3n4Ua_iQ_O6g&s",
  },

  {
    name: "Siamese Cat",
    type: "Cat",
    price: "₹14,000",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
  },
  {
    name: "Pug",
    type: "Dog",
    price: "₹16,000",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
  },
  {
    name: "Betta Fish",
    breed: "Fish",
    price: "₹800",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2023/2/HL/GW/QX/29367984/product-jpeg-500x500.jpg",
  },
  {
    name: "Gold Fish",
    breed: "Fish",
    price: "₹500",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmEeKJ6tWYkj4SZvUY7Y5FdkIETwTTPFPrA&s",
  },
  {
    name: "Turtle",
    breed: "Reptile",
    price: "₹2,200",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_TSdlfqNQnlZ9NRo66htOHA71V-xUgEuMQ&s",
  },
  {
    name: "Love Birds",
    breed: "Bird Pair",
    price: "₹3,200",
    image:
      "https://media.istockphoto.com/id/1243410279/photo/portrait-of-two-cute-cuddling-budgies-perched-on-branch-with-blue-background-as-symbol-of.jpg?s=612x612&w=0&k=20&c=d3YXfJpe6GS1qqs6V-bQVQpLNKv2Dd6Yvh7unm1KeGU=",
  },
  {
    name: "Guinea Pig",
    breed: "Small Pet",
    price: "₹2,800",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcfPq2bTmOXZtsLOZMz5eiTEimEg195LBBCQ&s",
  },
  {
    name: "Ferret",
    breed: "Exotic Pet",
    price: "₹6,500",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdX8iVMV_CyFm9SF1MYZ6tlrps-NzcKot08A&s",
  },
  {
    name: "Labrador Retriever",
    breed: "Dog",
    price: "₹22,000",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d",
  },
  {
    name: "Beagle",
    breed: "Dog",
    price: "₹17,000",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a",
  },
  {
    name: "Rottweiler",
    breed: "Dog",
    price: "₹28,000",
    image: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb",
  },
  {
    name: "Shih Tzu",
    breed: "Dog",
    price: "₹25,000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXcd9FPYOVJnKXAuwF79KhVIHDzfDSVWRf2g&s",
  },
  {
    name: "Green Love Birds",
    breed: "Love Birds",
    price: "₹3,200",
    image:
      "https://media.istockphoto.com/id/619402640/photo/lovebird-parrots-sitting-together.jpg?s=612x612&w=0&k=20&c=O6fGzwhawUOk5diLmaTiIliBy-Y1VwIzXTz0TOC1Ki8=",
  },
  {
    name: "Yellow Love Birds",
    breed: "Love Birds",
    price: "₹3,500",
    image:
      "https://i.pinimg.com/474x/56/15/9c/56159c980420da3526115c0ae95da268.jpg",
  },
  {
    name: "Peach Face Love Birds",
    breed: "Love Birds",
    price: "₹3,800",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmfJARU4xIdi_mdXXrtd83HY1_EOKES4gFeg&s",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerPadding: "20px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div style={styles.page}>
      {/* HERO SECTION */}
      <div style={styles.hero}>
        <div style={styles.heroLeft}>
          <h1 style={styles.title}>🐾 Welcome to PetCare</h1>
          <p style={styles.subtitle}>
            Find cute, healthy & lovable pets for your family
          </p>
          <button style={styles.primaryBtn} onClick={() => navigate("/adopt")}>
            Adopt Now
          </button>
          <button
            style={styles.secondaryBtn}
            onClick={() => navigate("/explore")}
          >
            Explore Pets
          </button>
        </div>
        <div style={styles.heroRight}>
          <img
            src="https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=1200&auto=format&fit=crop"
            alt="Cute Pet"
            style={styles.heroImage}
          />
        </div>
      </div>

      {/* PET CAROUSEL */}
      <h2 style={styles.sectionTitle}>Our Lovely Pets</h2>

      <div style={styles.corousel}>
        <Slider {...settings}>
          {pets.map((pet, index) => (
            <div key={index} style={{ padding: "15px" }}>
              <div
                key={index}
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <img src={pet.image} alt={pet.name} style={styles.petImage} />

                <div style={styles.cardContent}>
                  <h3 style={styles.petName}>{pet.name}</h3>
                  <p style={styles.petBreed}>{pet.type || pet.breed}</p>
                  <p style={styles.petPrice}>{pet.price}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: "20px 40px",
    backgroundColor: "#f8f9fa",
    fontFamily: "Poppins ,sans-serif",
  },

  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "60px",
    borderRadius: "20px",
    marginBottom: "50px",
    background: "linear-gradient(135deg,#fff5f5,#ffe3e3)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },

  heroLeft: {
    width: "50%",
  },
  corousel: {
    maxWidth: "1200px",
    margin: "auto",
  },

  heroRight: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
  },

  heroImage: {
    width: "550px",
    maxWidth: "380px",
    borderRadius: "20px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
    height: "450px",
  },

  title: {
    fontSize: "3rem",
    color: "#ff6f61",
    marginLeft: "50px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#555",
    marginleft: "20px",
  },
  sectionTitle: {
    textAlign: "center",
    // marginBottom: "30px",
    margin: "40px 0",
    fontSize: "32px",
    fontWeight: "700",
    color: "#333",
  },
  card: {
    // margin: "15px",
    background: "#fff",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    transition: "0.3s",
    padding: "15px",
  },
  cardContent: {
    padding: "20px",
    textAlign: "center",
  },

  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  info: {
    textAlign: "center",
    padding: "10px",
  },
  heading: {
    textAlign: "center",
    margin: "40px 0 20px",
    fontSize: "28px",
    color: "#333",
  },

  carousel: {
    display: "flex",
    gap: "20px",
    overflowX: "auto",
    padding: "20px",
    scrollBehavior: "smooth",
  },
  petImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },

  petName: {
    marginBottom: "10px",
    fontSize: "20px",
    fontWeight: "600",
  },

  petBreed: {
    color: "#ff6f61",
    fontWeight: "500",
    marginBottom: "8px",
  },

  petPrice: {
    fontWeight: "bold",
    color: "#555",
  },
  primaryBtn: {
    background: "#ff6f61",
    color: "white",
    border: "none",
    padding: "12px 25px",
    borderRadius: "8px",
    marginRight: "10px",
    cursor: "pointer",
    fontSize: "16px",
  },

  secondaryBtn: {
    background: "white",
    color: "#ff6f61",
    border: "2px solid #ff6f61",
    padding: "12px 25px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Home;
