import { GlobalStyle } from './GlobalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from './Images/404-Error-Websites.jpg';
import { Error } from './Error';
import { AppBar } from './AppBar';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies/Movies'
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { AdditionalMessage } from './AdditionalMessage';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';




export const App = () => {
  return (
    <>
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
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </>
  );
};
