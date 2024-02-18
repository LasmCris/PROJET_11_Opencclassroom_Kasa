import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./styles/index.css"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import logoKasa from "./assets/LOGO.png"
import logoBlack from "./assets/logoBlack.png";

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
      </Routes>

      <footer>
        <img src={logoBlack} alt="Logo present dans le footer" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </BrowserRouter>
  );
}


const root = document.getElementById("root");
ReactDom.createRoot(root).render(<App />);