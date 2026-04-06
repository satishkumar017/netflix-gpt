import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import {addPopularMovies  } from "../Utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS,
    );
    const JsonData = await data.json();
    dispatch(addPopularMovies(JsonData.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default usePopularMovies;
