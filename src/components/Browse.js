import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { nowPlayingMoviesURL } from "../utils/constants";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies(nowPlayingMoviesURL);

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        Main Container
          - VideoBackground
          - VideoTitle
        Secondary Container
          - MoviesList * n
            - Cards * n
      */}
    </div>
  );
};

export default Browse;
