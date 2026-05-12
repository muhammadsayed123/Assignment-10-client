// import React from 'react';

import { useLoaderData } from "react-router";
import AboutPlatform from "../Component/AboutPlatform";
import GenreSection from "../Component/GenreSection";
import HeroSection from "../Component/HeroSection";
import RecentlyAdded from "../Component/RecentlyAdded";
import StatisticsSection from "../Component/StatisticsSection";
import TopRatedMovies from "../Component/TopRatedMovies";

const Home = () => {
  const topRated = useLoaderData();
  console.log(topRated);
  return (
    <div>
      <HeroSection></HeroSection>

      <StatisticsSection></StatisticsSection>

      <div className="w-10/12 mx-auto">
        <h1 className="font-extrabold text-amber-500 text-3xl text-center mt-6 underline">
          Top Rated
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-5">
          {topRated.map((movie) => (
            <TopRatedMovies key={movie.id} movie={movie}></TopRatedMovies>
          ))}
        </div>
      </div>

      <RecentlyAdded></RecentlyAdded>
      <GenreSection></GenreSection>
      <AboutPlatform></AboutPlatform>
    </div>
  );
};

export default Home;
