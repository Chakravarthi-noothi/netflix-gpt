import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import {
  nowPlayingMoviesURL,
  popularMoviesURL,
  topRatedMoviesURL,
  upcomingMoviesURL,
} from "../utils/constants";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GPTSearchPage from "./GPTSearchPage";

const Browse = () => {
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);

  useNowPlayingMovies(nowPlayingMoviesURL);
  usePopularMovies(popularMoviesURL);
  useTopRatedMovies(topRatedMoviesURL);
  useUpcomingMovies(upcomingMoviesURL);

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

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
