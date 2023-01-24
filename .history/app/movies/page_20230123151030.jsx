import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../styles/globals.css";
import ItemDetails from "../../components/ItemDetails";

const Page = () => {
  return (
    <div className="font-Poppins flex flex-col justify-between min-h-[100vh]">
      <Header />
      <Navbar />
      <ItemDetails />
      <Footer />
    </div>
  );
};

export default Page;
