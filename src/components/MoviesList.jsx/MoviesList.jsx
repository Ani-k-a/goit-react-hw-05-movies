import React from 'react';
import css from './MoviesList.module.css';
import { Link } from 'react-router-dom';

export default function MoviesList({ movies }) {
  return (
    <ul className={css.list}>
      {movies.map(({ id, title }) => (
        <li className={css.item} key={id}>
          <Link key={id} to={`${id}`}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
