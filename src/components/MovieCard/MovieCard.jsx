import React from 'react';
import css from './MovieCard.module.css';
import PropTypes from 'prop-types';

export default function MovieCard({ movie }) {
  const { title, overview, genres, poster_path, vote_average } = movie;
  return (
    <div className={css.card}>
      <img
        className={css.image}
        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
        alt={title}
      ></img>
      <div>
        <h2>{title}</h2>
        <p>User score: {vote_average}</p>
        <ul>
          <li>
            <h3>Owerview</h3>
            <p>{overview}</p>
          </li>
          <li>
            <h3>Genres</h3>
            <p>{genres.map(el => el.name).join(', ')}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

MovieCard.propType = {
  movie: PropTypes.array,
};
