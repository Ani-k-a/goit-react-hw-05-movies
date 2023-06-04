import css from './MoviesList.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MoviesList({ movies }) {
  const location = useLocation();
  console.log(location);
  return (
    <ul className={css.list}>
      {movies.map(({ id, title }) => (
        <li className={css.item} key={id}>
          <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

MoviesList.propType = {
  movies: PropTypes.array,
};
