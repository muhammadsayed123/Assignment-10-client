// import React from 'react';

import { use } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import { AuthContest } from "../Contexts/AuthContext";

const MovieDetails = () => {
  const { user } = use(AuthContest);
  const {
    posterUrl,
    title,
    plotSummary,
    genre,
    country,
    language,
    director,
    rating,
    releaseYear,
    cast,
    addedBy,
    _id
  } = useLoaderData();
  //   console.log(movie);
  return (
    <div className="w-10/12 mx-auto my-10">
        <Link to="/allMovie" className="btn btn-outline btn-accent my-5">Back</Link>
      <div className="flex gap-5">
        <div className="left flex-1">
          <img src={posterUrl} alt="" className="rounded-2xl" />
        </div>
        <div className="right flex-1">
          <div>
            <div className="badge badge-soft badge-warning mr-2">{genre}</div>
            <div className="badge badge-soft badge-primary">{language}</div>
          </div>
          <h1 className="font-bold text-3xl mb-5 mt-2">{title}</h1>
          <div className="flex gap-3 font-semibold mb-2">
            <div className="flex items-center gap-1 badge badge-dash badge-secondary">
              <FaStar />
              {rating}
            </div>
            <p className="badge badge-ghost">{releaseYear}</p>
            <p className="badge badge-ghost">{country}</p>
          </div>
          <h1 className="text-gray-600">{plotSummary}</h1>

          <div className="bg-gray-100 p-4 rounded-3xl mt-3">
            <h1 className="text-gray-500 font-semibold">DIRECTOR</h1>
            <h1 className="font-semibold">{director}</h1>
          </div>
          <div className="bg-gray-100 p-4 rounded-3xl mt-3">
            <h1 className="text-gray-500 font-semibold">CAST</h1>
            <h1 className="font-semibold">{cast}</h1>
          </div>
          <div className="bg-gray-100 p-4 rounded-3xl mt-3">
            <h1 className="text-gray-500 font-semibold">ADDED BY</h1>
            <h1 className="font-semibold">{addedBy}</h1>
          </div>

          <div>
            {user && (
              <div className="mt-3c flex flex-row mt-5">
                <Link to={`/updateMovie/${_id}`} className="btn btn-neutral btn-outline mr-5 rounded-4xl">Update Page</Link> 
                <Link className="btn btn-neutral btn-outline rounded-4xl">Delete</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
