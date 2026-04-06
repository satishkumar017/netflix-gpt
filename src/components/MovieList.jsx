import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-6">
      <h1 className="text-white text-3xl font-semibold px-6 py-4">{title}</h1>
        <div className="flex overflow-x-scroll ">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
    </div>
  );
};

export default MovieList;
