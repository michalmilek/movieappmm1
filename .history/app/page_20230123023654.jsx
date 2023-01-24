import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Results from "../components/Results";
import requests from "../utils/requests";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SITE}${requests.fetchTrending.url}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Page = async () => {
  const data = await getData();
  console.log(data);

  return (
    <div className="font-Poppins flex flex-col justify-between min-h-[100vh]">
      <Header />
      <Navbar />
      {/* <Results /> */}
      <Footer />
    </div>
  );
};

export default Page;
