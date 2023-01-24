import React from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { HandThumbUpIcon, StarIcon } from "@heroicons/react/24/solid";

const ItemDetails = ({ movieInfo }) => {
  const Base_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="flex flex-col items-center justify-center px-8 py-4">
      <h1 className="text-4xl text-center font-Poppins">
        {movieInfo.data.title}
      </h1>
      <div className="flex flex-row gap-5 mt-5">
        {movieInfo.data.genres.map((genre) => (
          <button
            key={genre.id}
            className="rounded-full bg-black text-gray-200 px-4 py-2">
            {genre.name}
          </button>
        ))}
      </div>
      <div className="relative">
        <Image
          alt={movieInfo.data.title}
          layout="responsive"
          width={900}
          height={600}
          src={`${Base_URL}${
            movieInfo.data.poster_path || movieInfo.data.poster_path
          }`}
          className="border-[2px] h-[450px] w-[450px] border-white mt-5"
        />
        <div className="absolute lg:text-xl flex flex-col justify-center items-center top-[5%] left-3 text-white">
          <HandThumbUpIcon className="lg:h-16 lg:w-16" />
          <p>{movieInfo.data.popularity}</p>
        </div>
        <div className="absolute flex flex-col justify-center items-center top-[5%] right-3 text-white">
          <StarIcon className="lg:h-16 lg:w-16" />
          <p>{movieInfo.data.vote_average}</p>
        </div>
      </div>
      <h2 className="mt-5 text-2xl">{movieInfo.data.overview}</h2>
    </div>
  );
};

export default ItemDetails;
