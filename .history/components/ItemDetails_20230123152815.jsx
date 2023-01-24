import React from "react";
import { useSearchParams } from "next/navigation";

const ItemDetails = ({ movieInfo }) => {
  const info =
    "https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US";
  return (
    <div>
      <h1>{movieInfo.title}</h1>
    </div>
  );
};

export default ItemDetails;
