import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = (url) => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const nowPopularMovies = await data.json();
    dispatch(addPopularMovies(nowPopularMovies.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
