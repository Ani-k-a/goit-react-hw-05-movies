import React from 'react';
import css from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  const { title, overview } = movie;
  return (
    <div className={css.card}>
      {/* <img className={css.image}></img> */}
      <div>
        <h2>{title}</h2>
        <p></p>
        <ul>
          <li>
            <h3>Owerview</h3>
            <p>{overview}</p>
          </li>
          <li>
            <h3>Genres</h3>
            <p></p>
          </li>
        </ul>
      </div>
    </div>
  );
}
