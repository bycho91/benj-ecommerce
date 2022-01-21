import React from "react";
import { Navbar, Announcements, Slider, Categories } from "../components";
const Home = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
