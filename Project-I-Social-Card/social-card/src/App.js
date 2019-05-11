import React from "react";
import "./App.css";
import Header from "./components/HeaderComponents/HeaderContainer";
import Card from "./components/CardComponents/CardContainer";
import Footer from "./components/FooterComponents/Footer";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Card />
      <Footer />
    </div>
  );
};

export default App;
