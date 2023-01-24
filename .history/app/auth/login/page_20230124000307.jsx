import React from "react";
import Auth from "../../../components/Auth";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";

const page = () => {
  return (
    <div className="font-Poppins flex flex-col justify-between min-h-[100vh]">
      <Header />
      <Navbar />
      <Auth />
      <Footer />
    </div>
  );
};

export default page;
