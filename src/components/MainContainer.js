import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBG from "./VideoBG";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainTitleMovie = movies[1];
  console.log(mainTitleMovie);

  const { original_title, overview, id } = mainTitleMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBG movieId={id} />
    </div>
  );
};

export default MainContainer;
