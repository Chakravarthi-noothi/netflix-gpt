import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = (url) => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const nowUpcomingMovies = await data.json();
    dispatch(addUpcomingMovies(nowUpcomingMovies.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
