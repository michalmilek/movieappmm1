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
  const search = searchParams.get("search");

  useEffect(() => {
    const fetchData = async () => {
      if (category) {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_SITE}${requests[category]?.url}`
          );
          setData(response);
        } catch (err) {
          console.log(err);
        }
      } else if (search) {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_SITE}/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${search}&page=1`
          );
          setData(response);
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_SITE}${requests.fetchTrending.url}`
          );
          setData(response);
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchData();
    console.log(data);
  }, [category, search]);
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
