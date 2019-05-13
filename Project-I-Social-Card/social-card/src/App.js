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

/* 

  Personal Goals:

  1) Run current version of CRA remotely, copy project files over and refactor styles using LESS or SASS
  2) Make responsive with LESS, SASS or possibly bootstrap.
  3) Fine another library for the icons.
  3) Make share and like icons increment the count.

*/
