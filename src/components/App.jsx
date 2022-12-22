import { lazy, Suspense } from 'react';
import { GlobalStyle } from './GlobalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from './Images/404-Error-Websites.jpg';
import { Error } from './Error';
import { AppBar } from './AppBar';
import { Route, Routes } from 'react-router-dom';
import { ProgressBar } from 'react-loader-spinner';
import { ProgressBarStyle } from 'components/Services/fetchMovies';
import { AdditionalMessage } from './AdditionalMessage';

const Home = lazy(() =>
  import('../pages/Home').then(module => ({
    ...module,
    default: module.Home,
  }))
);
const Movies = lazy(() =>
  import('../pages/Movies/Movies').then(module => ({
    ...module,
    default: module.Movies,
  }))
);
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails').then(module => ({
    ...module,
    default: module.MovieDetails,
  }))
);
const Cast = lazy(() =>
  import('./Cast/Cast').then(module => ({
    ...module,
    default: module.Cast,
  }))
);
const Reviews = lazy(() =>
  import('./Reviews/Reviews').then(module => ({
    ...module,
    default: module.Reviews,
  }))
);

export const App = () => {
  return (
    <>
      <Suspense fallback={<ProgressBar {...ProgressBarStyle} />}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route index element={<AdditionalMessage />} />
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Error errorImg={img} />} />
          </Route>
        </Routes>
      </Suspense>

      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </>
  );
};
