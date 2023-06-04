import React from 'react';
import { Link } from 'react-router-dom';
import css from './AditionalInfo.module.css';

export default function AditionalInfo() {
  return (
    <div>
      <h3>Aditional information</h3>
      <ul className={css.list}>
        <li className={css.item}>
          <Link to="cast">Cast</Link>
        </li>
        <li className={css.item}>
          <Link to="revievs">Revievs</Link>
        </li>
      </ul>
    </div>
  );
}
