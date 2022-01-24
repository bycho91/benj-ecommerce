import React from "react";
import { Navbar, Announcements, Slider, Categories, ProductList, Newsletter, Footer } from "../components";
const Home = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <ProductList />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
