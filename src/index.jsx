import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./styles/index.css";
import "./styles/footer.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import LocationDetails from "./pages/LocationDetails.jsx";
import logoKasa from "./assets/LOGO.png";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          <img src={logoKasa} alt="" />
        </Link>
        <nav>
          <Link to="/about">A PROPOS</Link>
          <Link to="/">ACCUEIL</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Appartement/:id" element={<LocationDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

const root = document.getElementById("root");
ReactDom.createRoot(root).render(<App />);
