import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage.js";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import ContactPage from "./pages/ContactPage.js";
//
function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesDirectoryPage />
      <Footer />
    </div>
  );
}

export default App;
