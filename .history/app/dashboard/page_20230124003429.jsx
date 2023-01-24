import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ProfileLook from "../../components/ProfileLook";

const page = () => {
  return (
    <div className="font-Poppins flex flex-col justify-between min-h-[100vh]">
      <Header />
      <Navbar />
      <ProfileLook />
      <Footer />
    </div>
  );
};

export default page;
