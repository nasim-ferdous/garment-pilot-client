import React from "react";

import { Link } from "react-router";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import CustomerFeedback from "../CustomerFeedback/CustomerFeedback";
import Brands from "../Brands/Brands";
import ManagersInfo from "../ManagersInfo/ManagersInfo";

const Home = () => {
  return (
    <div>
      <div className="space-y-24 py-24">
        {/*   BANNER  */}
        <Banner></Banner>

        {/*  OUR PRODUCTS  */}

        {/*  HOW IT WORKS  */}
        <HowItWorks></HowItWorks>

        {/* CUSTOMER FEEDBACK */}
        <CustomerFeedback></CustomerFeedback>

        {/* BRANDS SECTION  */}
        <Brands></Brands>

        {/*  MANAGERS INFO  */}
        <ManagersInfo></ManagersInfo>
      </div>
    </div>
  );
};
export default Home;
