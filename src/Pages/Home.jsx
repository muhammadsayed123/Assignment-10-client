// import React from 'react';

import AboutPlatform from "../Component/AboutPlatform";
import GenreSection from "../Component/GenreSection";
import HeroSection from "../Component/HeroSection";
import RecentlyAdded from "../Component/RecentlyAdded";
import StatisticsSection from "../Component/StatisticsSection";
import TopRatedMovies from "../Component/TopRatedMovies";

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <StatisticsSection></StatisticsSection>
            <TopRatedMovies></TopRatedMovies>
            <RecentlyAdded></RecentlyAdded>
            <GenreSection></GenreSection>
            <AboutPlatform></AboutPlatform>
        </div>
    );
};

export default Home;