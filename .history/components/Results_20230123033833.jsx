"use client";

import React, { useEffect } from "react";
import SingleItem from "./SingleItem";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import requests from "../utils/requests";

const Results = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const res = fetch(
    `${process.env.NEXT_PUBLIC_API_SITE}${requests.fetchTrending.url}`
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = axios.get(
          `${process.env.NEXT_PUBLIC_API_SITE}${requests.fetchTrending.url}`
        );
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="py-20 grid sm:grid-cols-1 md:grid-cols-2 gap-10 justify-center md:px-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <h1>haja</h1>
      {/*   {results.map((result) => (
        <SingleItem
          key={result.id}
          result={result}
        />
      ))} */}
    </div>
  );
};

export default Results;
