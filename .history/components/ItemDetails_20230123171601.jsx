import React from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { HandThumbUpIcon, StarIcon } from "@heroicons/react/24/solid";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ItemDetails = ({ movieInfo }) => {
  const Base_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="flex flex-col items-center justify-center px-1 lg:px-8 py-4">
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
      <div className="relative border-white border-[2px] mb-5 mt-5 object-fill lg:h-[400px] lg:w-[800px] h-[400px] w-[400px]">
        <LazyLoadImage
          alt={movieInfo.data.title}
          className="object-fill border-[2px] top-0 left-0 border-white h-[700px]"
          effect="blur"
          src={`${Base_URL}${
            movieInfo.data.poster_path || movieInfo.data.backdrop_path
          }`}
        />
        <div className="absolute lg:text-xl flex flex-col justify-center items-center top-[10%] left-3 text-white">
          <HandThumbUpIcon className="lg:h-16 lg:w-16" />
          <p>{movieInfo.data.popularity}</p>
        </div>
        <div className="absolute flex flex-col justify-center items-center top-[10%] right-3 text-white">
          <StarIcon className="lg:h-16 lg:w-16" />
          <p>{movieInfo.data.vote_average}</p>
        </div>
      </div>
      <h2 className="mt-16 px-2 lg:text-lg text-justify pb-8">
        {movieInfo.data.overview}
      </h2>
    </div>
  );
};

export default ItemDetails;
