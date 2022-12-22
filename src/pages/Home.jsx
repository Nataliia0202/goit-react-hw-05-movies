import { useState, useEffect } from 'react';
import { getTrending } from 'components/Services/fetchMovies';
import { FilmsList } from 'components/FilmList/FilmsList';
import { toastError } from 'components/Services/toasts';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    try {
      getTrending().then(data => setMovies(data.results));
    } catch (error) {
      toastError();
    }
  }, []);

  return <FilmsList data={movies} />;
};
