import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return (
      <div className="no-movies">
        <div className="no-movies-content">
          <h2>🎬 No movies found</h2>
          <p>
            Try adjusting your filters or add some new movies to your
            collection!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
