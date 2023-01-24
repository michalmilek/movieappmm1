import React from "react";
import SingleItem from "./SingleItem";

const Results = ({ results }) => {
  return (
    <div className="py-20 grid sm:grid-cols-1 md:grid-cols-2 gap-10 justify-center md:px-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {results.map((result) => (
        <SingleItem
          key={result.id}
          result={result}
        />
      ))}
    </div>
  );
};

export default Results;
