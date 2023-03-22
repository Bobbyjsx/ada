/* eslint-disable prettier/prettier */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/dist/output.css";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/contact";
import WelcomeMessage from "./components/Welcome";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/welcome" element={<WelcomeMessage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
