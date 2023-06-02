import { useEffect, useState } from 'react';
import css from './Home.module.css';
import { fetchPopular } from 'Services/api.js';
import MoviesList from 'components/MoviesList.jsx/MoviesList';
import { ErrorViev } from 'components/ErrorViev/ErrorViev';
import { Loader } from 'components/Loader/Loader';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    fetchPopular().then(response => {
      if (response.results.length === 0) {
        setStatus('rejected');
      } else {
        setStatus('resolved');
        setMovies(response.results);
      }
      // console.log(response);
    });
  }, []);

  return (
    <section className={css.section}>
      <h1 className={css.title}>Trending today</h1>
      {status === 'pending' && <Loader />}

      {status === 'rejected' && <ErrorViev message="Something going wrong" />}
      {status === 'resolved' && <MoviesList movies={movies} />}
    </section>
  );
}
