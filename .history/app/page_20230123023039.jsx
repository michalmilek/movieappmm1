import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import requests from "../utils/requests";

const Page = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SITE}${requests.fetchTrending.url}`
  );

  return (
    <div className="font-Poppins flex flex-col justify-between min-h-[100vh]">
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
};

export default Page;
