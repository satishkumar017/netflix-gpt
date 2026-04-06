import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import {addUpcomingMovies  } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS,
    );
    const JsonData = await data.json();
    dispatch(addUpcomingMovies(JsonData.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};
export default useUpcomingMovies;
