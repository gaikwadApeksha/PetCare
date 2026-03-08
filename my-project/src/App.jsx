import LoginPage from "./Components/LoginPage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import RegisterPage from "./Components/Registration";
// import CategoriesPage from "./Components/CatogoriesPage";
import ContactPage from "./Components/Contact";
import AddPet from "./Components/AddPet";
import AdoptForm from "./Components/AdoptForm";
import AdoptPage from "./Components/AdoptPage";
import Explore from "./Components/Explore";
import CategoryPets from "./Components/CategoryPets";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/addpet" element={<AddPet />} />
          <Route path="/adopt" element={<AdoptPage />} />
          <Route path="/adoptform" element={<AdoptForm />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/category/:type" element={<CategoryPets />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
