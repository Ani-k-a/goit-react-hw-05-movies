import React from 'react';
import css from './Layout.module.css';
import { NavLink, Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <div>
      <div className={css.header}>
        <ul className={css.navList}>
          <li className={css.item}>
            <NavLink to="/" className={css.link}>
              Home
            </NavLink>
          </li>
          <li className={css.item}>
            <NavLink to="/movies" className={css.link}>
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
