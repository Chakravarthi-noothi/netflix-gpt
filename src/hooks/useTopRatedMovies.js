import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = (url) => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const nowTopRatedMovies = await data.json();
    dispatch(addTopRatedMovies(nowTopRatedMovies.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
