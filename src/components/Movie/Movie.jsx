import { fetchMovieInfo } from 'Services/api';
import AditionalInfo from 'components/AditionalInfo/AditionalInfo';
import MovieCard from 'components/MovieCard/MovieCard';
import Loader from 'components/Loader/Loader';
import ErrorViev from 'components/ErrorViev/ErrorViev';
import { FaArrowLeft } from 'react-icons/fa';
import css from './Movie.module.css';
import { Outlet, useLocation, Link, useParams } from 'react-router-dom';
import { useEffect, useState, Suspense, useRef } from 'react';

export default function Movie() {
  const [movie, setMovie] = useState('');
  const [status, setStatus] = useState('idle');

  const { id } = useParams();

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    setStatus('pending');

    fetchMovieInfo(id).then(response => {
      if (!response) {
        setStatus('rejected');
      } else {
        setStatus('resolved');
        setMovie(response);
      }
    });
  }, [id]);

  return (
    <section className={css.section}>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <ErrorViev message="Something going wrong" />}
      {status === 'resolved' && (
        <>
          <Link className={css.button} to={backLinkLocationRef.current}>
            <FaArrowLeft className={css.arrow} />
            Go back
          </Link>
          <MovieCard movie={movie} />
          <AditionalInfo></AditionalInfo>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </section>
  );
}
