// Import global
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Student from "./pages/students/Student";
import UserLists from "./pages/UserLists";
import AddStudent from "./pages/students/AddStudent";
import LinkState from "./pages/LinkState";

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
        <Route path="/students" element={<Student />} />
        <Route path="/students/add" element={<AddStudent />} />
        <Route path="/user-lists" element={<UserLists />} />
        <Route path="/link-state" element={<LinkState />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
