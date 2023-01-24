import React from "react";
import { useSearchParams } from "next/navigation";

const ItemDetails = ({ movieInfo }) => {
  const info =
    "https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US";
  return (
    <div>
      <h1>{movieInfo.data.title}</h1>
      {movieInfo.data.genres.map((genre) => (
        <div>
          <button className="rounded-full bg-black text-gray-200 px-4 py-2">
            {genre.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemDetails;
