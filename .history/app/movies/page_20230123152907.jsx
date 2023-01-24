"use client";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../styles/globals.css";
import ItemDetails from "../../components/ItemDetails";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const Page = () => {
  const [movieInfo, setMovieInfo] = useState();
  const searchParams = useSearchParams();
  const movie = searchParams.get("movie");

  const info =
    "https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US";
  //api.themoviedb.org/3/movie/41213?api_key=8d5cbcd4462e349b72737ac5ccdf7869
  //${process.env.NEXT_PUBLIC_API_SITE}/movie/${movie}?api_key=${process.env.NEXT_PUBLIC_API_KEY}

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/41213?api_key=8d5cbcd4462e349b72737ac5ccdf7869`
        );
        setMovieInfo(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    //console.log(movieInfo);
  }, [movie]);

  return (
    <div className="font-Poppins flex flex-col justify-between min-h-[100vh]">
      <Header />
      <Navbar />

      {movieInfo && <ItemDetails movieInfo={movieInfo} />}
      <Footer />
    </div>
  );
};

export default Page;
