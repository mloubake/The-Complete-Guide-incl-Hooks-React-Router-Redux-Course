import React from "react";

import classes from "./Movie.module.css";

export interface IMovie {
  title: string;
  releaseDate: string;
  openingText: string;
}

const Movie: React.FC<IMovie> = ({ title, releaseDate, openingText }) => {
  return (
    <li className={classes.movie}>
      <h2>{title}</h2>
      <h3>{openingText}</h3>
      <p>{releaseDate}</p>
    </li>
  );
};

export default Movie;
