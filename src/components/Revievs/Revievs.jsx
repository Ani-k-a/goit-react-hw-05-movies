import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import ErrorViev from 'components/ErrorViev/ErrorViev';
import { fetchMovieRevievs } from 'Services/api';

export default function Revievs() {
  const [movie, setMovie] = useState('');
  const [status, setStatus] = useState('idle');

  const { id } = useParams();

  useEffect(() => {
    setStatus('pending');
    fetchMovieRevievs(id).then(response => {
      if (!response) {
        setStatus('rejected');
      } else {
        setStatus('resolved');
        setMovie(response);
      }
    });
  }, [id]);

  const { results } = movie;

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <ErrorViev message="Something going wrong" />}
      {status === 'resolved' && (
        <ul>
          {results.length === 0 ? (
            <div>No any revievs</div>
          ) : (
            results.map(el => (
              <li key={el.id}>
                <div>{el.author}</div>
                <p>{el.content}</p>
              </li>
            ))
          )}
        </ul>
      )}
    </>
  );
}
