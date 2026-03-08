import { useNavigate } from "react-router";
import pets from "../data/petsData";

const categories = [
  {
    name: "Dog",
    // icon: "🐶",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/friendliest-dog-breeds-golden-1578596627.jpg?crop=1.00xw:0.752xh;0,0.189xh&resize=640:*",
  },
  {
    name: "Cat",
    // icon: "🐱",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWgDZ3DA6hKeVW81wDr_RaE-qBK6RwsoT3uw&s",
  },
  {
    name: "Bird",
    // icon: "🐦",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/049/201/489/small/colorful-birds-perched-on-a-branch-in-a-lush-green-forest-during-daylight-photo.jpeg",
  },
  {
    name: "Fish",
    // icon: "🐠",
    image:
      "https://www.thesprucepets.com/thmb/bKgaPD0oT0AjK6-QdbbxpnX-3xM=/1280x0/filters:no_upscale():strip_icc()/step_6-clownfish-596f711ac4124400102014c2.jpg",
  },
  {
    name: "Rabbit",
    // icon: "🐰",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzMffeoXGE4Yk5qYBPILNYaL5zNwnEz",
  },
  {
    name: "Reptile",
    // icon: "🐢",
    image:
      "https://thumbs.dreamstime.com/b/cute-endangered-baby-turtle-swimming-crystal-clear-water-52629725.jpg",
  },
];

function Explore() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2>Explore Pet Categories</h2>

      <div style={styles.grid}>
        {categories.map((cat, index) => (
          <div
            key={index}
            style={styles.card}
            onClick={() => navigate(`/category/${cat.name}`)}
          >
            <div style={styles.icon}>
              <img src={cat.image} alt="" style={styles.image} />
            </div>
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    // padding: "50px",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "15px",
    marginBottom: "10px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
    gap: "25px",
    marginTop: "30px",
  },

  card: {
    padding: "40px",
    background: "white",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "0.3s",
  },

  icon: {
    // fontSize: "50px",
    // marginBottom: "10px",
  },
};

export default Explore;
