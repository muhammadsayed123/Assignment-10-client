// import React from 'react';

import { useLoaderData } from "react-router";
import MovieCard from "../Component/MovieCard";

const AllMovie = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="w-10/12 mx-auto">
      <p className="font-bold text-3xl mt-7">All <span className="text-amber-500">Movies</span></p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-15 ">
        {data.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default AllMovie;
