import { useState, useEffect, Suspense } from 'react';
import css from './Movies.module.css';
import SearchFoarm from 'components/SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';
import ErrorViev from 'components/ErrorViev/ErrorViev';
import { fetchSearch } from 'Services/api';
import MoviesList from 'components/MoviesList.jsx/MoviesList';
import { Outlet, useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const [status, setStatus] = useState('idle');
  const [movies, setMovies] = useState([]);

  const submitForm = query => {
    setQuery(query);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    setStatus('pending');
    fetchSearch(query).then(response => {
      if (response.results.length === 0) {
        setStatus('rejected');
      } else {
        setStatus('resolved');
        setMovies(response.results);
      }
    });
  }, [query]);

  return (
    <section className={css.section}>
      {status === 'idle' && <SearchFoarm submitForm={submitForm}></SearchFoarm>}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && (
        <>
          <SearchFoarm submitForm={submitForm}></SearchFoarm>
          <ErrorViev message="There are no results for your search" />
        </>
      )}
      {status === 'resolved' && (
        <>
          <SearchFoarm submitForm={submitForm}></SearchFoarm>
          <MoviesList movies={movies}></MoviesList>
        </>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet></Outlet>
      </Suspense>
    </section>
  );
}
