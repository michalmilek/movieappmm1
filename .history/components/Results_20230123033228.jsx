"use client";

import React from "react";
import SingleItem from "./SingleItem";
import { useSearchParams } from "next/navigation";

const Results = async () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SITE}${
      requests[category].url || requests.fetchTrending.url
    }`
  );

  const data = res.json();
  console.log(data);

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
