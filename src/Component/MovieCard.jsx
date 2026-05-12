// import React from 'react';

import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const MovieCard = ({ movie }) => {
  const { posterUrl, title, rating, genre, _id } = movie;

  return (
    <div>
      <div className="">
        <div
          className="card bg-gray-100 shadow-sm  transition-all 
          duration-300 
          hover:scale-105 
          hover:-translate-y-2
          hover:shadow-2xl
          cursor-pointer border-3 rounded-xl border-amber-500"
        >
          <figure>
            <img src={posterUrl} alt="Movie" className="h-[250px] w-full" />
          </figure>
          <div className="card-body">
            <div className="flex items-center justify-between">
              <h2 className="card-title font-bold">{title}</h2>
              <h2 className="badge badge-soft badge-warning font-semibold">
                {genre}
              </h2>
            </div>
            <div className="flex items-center gap-1 badge badge-dash badge-secondary ">
              <FaStar />
              <p>{rating}</p>
            </div>
            <div className="card-actions justify-between">
              <button className="btn">Buy Now</button>
              <Link to={`/movieDetails/${_id}`} className="btn">
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
