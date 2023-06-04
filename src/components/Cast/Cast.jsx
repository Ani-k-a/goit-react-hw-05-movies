import { useEffect, useState } from 'react';
import { fetchMovieActors } from 'Services/api';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import ErrorViev from 'components/ErrorViev/ErrorViev';

export default function Cast() {
  const [movie, setMovie] = useState('');
  const [status, setStatus] = useState('idle');

  const { id } = useParams();

  useEffect(() => {
    setStatus('pending');
    fetchMovieActors(id).then(response => {
      if (!response) {
        setStatus('rejected');
      } else {
        setStatus('resolved');
        setMovie(response);
      }
    });
  }, [id]);

  const { cast } = movie;

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <ErrorViev message="Something going wrong" />}
      {status === 'resolved' && (
        <ul>
          {cast.length === 0 ? (
            <div>No any cast</div>
          ) : (
            cast.map(el => <li key={el.id}>{el.name}</li>)
          )}
        </ul>
      )}
    </>
  );
}
