import React from "react";
import Hero from "./Hero";
import Upcoming from "./Upcomming";
import Weakend from "./Weakend";
import Why from "./Why";
import Certificate from "./Certificate";
import Motivation from "./Motivation";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Upcoming />
      {/* <Weakend /> */}
      <Why />
      <Certificate />
      <Motivation />
    </main>
  );
};

export default HomePage;
