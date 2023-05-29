import React from 'react';
import css from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  return (
    <ul className={css.list}>
      {movies.map(({ id, title }) => (
        <li className={css.item} key={id}>
          {title}
        </li>
      ))}
    </ul>
  );
}
