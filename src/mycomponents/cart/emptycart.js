import React from "react";
import Title from "../title";
import {Link} from "react-router-dom"
const Emptycart = () => {
  return (
    <>
      <Title name="your" title=" cart is empty"></Title>
      <Link to="/product"></Link>
    </>
  );
};

export default Emptycart;
