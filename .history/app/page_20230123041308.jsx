"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Results from "../components/Results";
import requests from "../utils/requests";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const Page = () => {
  const [data, setData] = useState();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_SITE}${requests.fetchTrending.url}`
        );
        setData(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    console.log(data);
  }, [category]);
  return (
    <div className="font-Poppins flex flex-col justify-between min-h-[100vh]">
      <Header />
      <Navbar />
      {data && <Results data={data} />}
      <Footer />
    </div>
  );
};

export default Page;
