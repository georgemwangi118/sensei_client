import { useState } from "react";

import Cards from "../../components/cards/Cards";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import { homeObjOne } from "../../components/info/Data";
import Info from "../../components/info/Info";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Cards />
      <Info {...homeObjOne} />
      <Footer />
    </div>
  );
};

export default HomePage;
