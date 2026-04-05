import React, { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../Utils/moviesSlice";
const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    // fetching trailer video and updating my store with trailer video data
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );
    const json = await data.json();

    const teaserMovies = json.results?.filter(
      (movie) => movie.type == "Trailer",
    );
    const trailer =teaserMovies&& teaserMovies.length > 0 ? teaserMovies[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if (movieId) getMovieVideos();
  }, [movieId]);
};
export default useTrailerVideo;
