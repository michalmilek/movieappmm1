"use client";
import Image from "next/image";
import React from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import { useRouter } from "next/router";

const SingleItem = ({ result }) => {
  const Base_URL = "https://image.tmdb.org/t/p/original";
  const router = useRouter();
  const info =
    "https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US";
  return (
    <AnimatePresence>
      <m.div
        onClick={() =>
          router.push(
            `/movies/?movie=${result.id}`,
            `/movies/?movie=${result.id}`,
            { shallow: true }
          )
        }
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative group cursor-pointer max-w-[400px] md:max-w-none bg-gray-200 px-2 py-1 border-[3px] border-black drop-shadow-md shadow-lg hover:drop-shadow-xl transition-all">
        <Image
          alt={result.title}
          layout="responsive"
          src={`${Base_URL}${result.poster_path || result.backdrop_path}`}
          height={600}
          width={1920}
        />
        <div className="">
          <h2 className="mt-1 text-2xl text-black transition-all group-hover:font-bold">
            {result.title || result.original_name}
          </h2>
          <p className="truncate max-w-md">{result.overview}</p>
          <p className="flex italic capitalize transition-all items-center justify-start text-transparent group-hover:text-black">
            {result.media_type && `${result.media_type}, `}{" "}
            {result.release_date || result.first_air_date}{" "}
          </p>
        </div>
      </m.div>
    </AnimatePresence>
  );
};

export default SingleItem;
