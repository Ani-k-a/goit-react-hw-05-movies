import { useEffect, useState } from 'react';
import css from './Home.module.css';
import { fetchPopular } from 'Services/api.js';
import MoviesList from 'components/MoviesList.jsx/MoviesList';

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchPopular().then(response => {
      setMovies(response.results);
    });
  }, []);

  return (
    <section className={css.section}>
      <h1 className={css.title}>Trending today</h1>
      <MoviesList movies={movies} />
    </section>
  );
}
