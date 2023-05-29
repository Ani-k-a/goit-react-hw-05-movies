import Home from 'Pages/Home/Home';
import Movies from 'Pages/Movies/Movies';
import { NavLink, Route, Routes } from 'react-router-dom';
import css from './App.module.css';

export const App = () => {
  return (
    <>
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
};
