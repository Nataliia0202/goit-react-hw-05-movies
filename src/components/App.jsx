import { GlobalStyle } from './GlobalStyles';
import { ToastContainer } from 'react-toastify';
// import img from './images/404-Error-Websites.jpg';
import { AppBar } from './AppBar';


export const App = () => {
  return (
    <>
      <AppBar />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </>
  );
};
