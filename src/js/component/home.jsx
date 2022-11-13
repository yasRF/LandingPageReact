import React from "react";

import Navbar from "./navbar.jsx";
import Jumbotrom from "./jumbotrom.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
  return (
    <>
      <div>
        <NavBar />
        <Jumbotrom />
        <Card />
        <Footer />
      </div>
    </>
  );
};

export default Home;
