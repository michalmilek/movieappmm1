import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Results from "../components/Results";
import requests from "../utils/requests";

async function getData({ searchParams }) {
  /* console.log(searchParams); */
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SITE}${
      requests[searchParams]?.url || requests.fetchTrending.url
    }`
  );

  ///?category=fetchComedyMovies
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Page = async ({ searchParams }) => {
  const cat = searchParams.category;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SITE}${
      requests[cat] || requests.fetchTrending.url
    }`
  );

  ///?category=fetchComedyMovies

  const data = res.json();

  console.log(requests[cat].url.json());

  return (
    <div className="font-Poppins flex flex-col justify-between min-h-[100vh]">
      <Header />
      <Navbar />
      {/* <Results results={data.results} /> */}
      <Footer />
    </div>
  );
};

export default Page;
