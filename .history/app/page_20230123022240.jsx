import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Page = () => {
  return (
    <div className="font-Poppins flex flex-col justify-between min-h-[100vh]">
      <Header />
      <Navbar />
    </div>
  );
};

export default Page;
