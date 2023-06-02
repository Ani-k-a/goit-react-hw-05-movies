import Home from 'Pages/Home/Home';
import { NavLink, Route, Routes, Outlet } from 'react-router-dom';
import css from './App.module.css';
// import Movie from './Movie/Movie';
import Movies from 'Pages/Movies/Movies';
// import { ErrorViev } from './ErrorViev/ErrorViev';
// import Movie from './Movie/Movie';

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
      <Outlet />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/" element={<Movies />} />
        <Route path="/movie/:id" element={<div>hello</div>} />
        {/* <Route
          path="*"
          element={<ErrorViev message={'Something going wrong'} />}
        /> */}
      </Routes>
    </>
  );
};
