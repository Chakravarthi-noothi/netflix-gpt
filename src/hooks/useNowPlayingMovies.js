import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = (url) => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const nowPlayingMovies = await data.json();
    dispatch(addNowPlayingMovies(nowPlayingMovies.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
