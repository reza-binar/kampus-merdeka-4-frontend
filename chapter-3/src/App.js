// Import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar and Footer component will be stay */}
      <Navbar />

      {/* The page will only effected to the content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
