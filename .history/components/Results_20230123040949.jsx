"use client";

import React, { useEffect, useMemo, useState } from "react";
import SingleItem from "./SingleItem";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import requests from "../utils/requests";

const Results = ({ data }) => {
  return (
    <div className="py-20 grid sm:grid-cols-1 md:grid-cols-2 gap-10 justify-center md:px-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {data.data.results.map((result) => (
        <SingleItem
          key={result.id}
          result={result}
        />
      ))}
    </div>
  );
};

export default Results;
