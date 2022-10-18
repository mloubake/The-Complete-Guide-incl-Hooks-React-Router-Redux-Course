import React from "react";
import Movie from "./Movie";

import classes from "./MoviesList.module.css";

export interface IMoviesListProps {
  movies: {
    id: string;
    title: string;
    openingText: string;
    releaseDate: string;
  }[];
}

const MoviesList: React.FC<IMoviesListProps> = ({ movies }) => {
  return (
    <ul className={classes["movies-list"]}>
      {movies.map((movie) => {
        return (
          <Movie
            key={movie.id}
            title={movie.title}
            openingText={movie.openingText}
            releaseDate={movie.releaseDate}
          />
        );
      })}
    </ul>
  );
};

export default MoviesList;
