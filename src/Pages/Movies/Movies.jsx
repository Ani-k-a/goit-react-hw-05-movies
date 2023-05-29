import { useState, useEffect } from 'react';
import css from './Movies.module.css';
import { SearchFoarm } from 'components/SearchForm/SearchForm';
import { Loader } from 'components/Loader/Loader';
import { ErrorViev } from 'components/ErrorViev/ErrorViev';
import { fetchSearch } from 'Services/api';
import MoviesList from 'components/MoviesList.jsx/MoviesList';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('idle');
  const [movies, setMovies] = useState([]);

  const submitForm = query => {
    setQuery(query);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    fetchSearch(query).then(response => {
      console.log(response);
      if (response.results.length === 0) {
        setStatus('rejected');
      } else {
        setStatus('resolved');
        setMovies(response.results);
      }
      console.log(response);
    });
    console.log(query);
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
    </section>
  );
}
