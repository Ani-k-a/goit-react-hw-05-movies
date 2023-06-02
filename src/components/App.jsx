import Home from 'Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Movies from 'Pages/Movies/Movies';
import Layout from './Layout/Layout';
import Movie from './Movie/Movie';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies/" element={<Movies />} />
        <Route path="movies/:id" element={<Movie />} />
        {/* <Route
          path="*"
          element={<ErrorViev message={'Something going wrong'} />} */}
        {/* /> */}
      </Route>
    </Routes>
  );
};
