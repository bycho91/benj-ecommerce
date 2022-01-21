import React from "react";
import { Navbar, Announcements, Slider, Categories, ProductList } from "../components";
const Home = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <ProductList />
    </div>
  );
};

export default Home;
