import React from "react";
import { useSearchParams } from "next/navigation";

const ItemDetails = ({ movieInfo }) => {
  const info =
    "https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US";
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl">{movieInfo.data.title}</h1>
      <div className="flex flex-row gap-5">
        {movieInfo.data.genres.map((genre) => (
          <button className="rounded-full bg-black text-gray-200 px-4 py-2">
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ItemDetails;
