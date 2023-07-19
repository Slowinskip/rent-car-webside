import "./App.css";
import Home from "./components/layout/Home/Home";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./components/features/Login/Login";
import Register from "./components/features/Register/Register";
import Contact from "./components/features/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/CarRent" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
