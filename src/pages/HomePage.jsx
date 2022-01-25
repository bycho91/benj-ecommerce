import React from "react";
import {
  Navbar,
  Announcements,
  Slider,
  Categories,
  Products,
  Newsletter,
  Footer,
} from "../components";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcements />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
