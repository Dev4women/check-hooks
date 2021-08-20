import React from "react";
import Movie from "./Movie";
import PropTypes from "prop-types"

export default function MoviesList({ movies }) {
  return (
    <div className="movieList">
      {movies.map((movie) => (
        <Movie
          title={movie.title}
          overview={movie.overview}
          posterUrl={movie.posterUrl}
          rating={movie.rating}
          key={movie.id}
        />
      ))}
    </div>
  );
}
MoviesList.propTypes= {
  movies: PropTypes.arrayOf(PropTypes.object)
}