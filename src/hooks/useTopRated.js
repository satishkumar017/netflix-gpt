import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies  } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS,
    );
    const JsonData = await data.json();
    dispatch(addTopRatedMovies(JsonData.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
