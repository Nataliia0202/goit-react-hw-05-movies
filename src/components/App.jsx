import { GlobalStyle } from './GlobalStyles';
import { ToastContainer } from 'react-toastify';
// import img from './images/404-Error-Websites.jpg';
import { AppBar } from './AppBar';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import {Movies} from '../pages/Movies/Movies'


export const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </>
  );
};
