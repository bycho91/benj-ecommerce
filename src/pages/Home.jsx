import React from "react";
import { Navbar, Announcements, Slider, Categories, ProductList, Newsletter } from "../components";
const Home = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <ProductList />
      <Newsletter />
    </div>
  );
};

export default Home;
