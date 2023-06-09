import Home from 'Pages/Home/Home';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import ErrorViev from './ErrorViev/ErrorViev';
import Cast from './Cast/Cast';
import Revievs from './Revievs/Revievs';
import Loader from './Loader/Loader';

const Movie = lazy(() => import('./Movie/Movie'));
const Movies = lazy(() => import('../Pages/Movies/Movies'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies/" element={<Movies />} />
          <Route path="movies/:id" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="revievs" element={<Revievs />} />
          </Route>
          <Route
            path="*"
            element={<ErrorViev message={'Something going wrong'} />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
