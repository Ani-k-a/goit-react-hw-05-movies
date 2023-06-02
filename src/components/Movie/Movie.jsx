// import { fetchMovieInfo } from 'Services/api';
// import AditionalInfo from 'components/AditionalInfo/AditionalInfo';
// import Button from 'components/Button/Button';
// import MovieCard from 'components/MovieCard/MovieCard';
// import { Loader } from 'components/Loader/Loader';
// import { ErrorViev } from 'components/ErrorViev/ErrorViev';
// import { useEffect, useState } from 'react';
// // import css from './Movie.module.css';
// import { useParams } from 'react-router-dom';

// export default function Movie() {
//   // const [movie, setMovie] = useState('');
//   // const [status, setStatus] = useState('idle');

//   const { id } = useParams();
//   console.log(id);

//   // useEffect(() => {
//   //   setStatus('pending');

//   //   fetchMovieInfo(id).then(response => {
//   //     if (response.results.length === 0) {
//   //       setStatus('rejected');
//   //     } else {
//   //       setStatus('resolved');
//   //       setMovie(response.results);
//   //       console.log(response.results);
//   //     }
//   //   });
//   // }, [id]);

//   return <div>done {id}</div>;
// }
