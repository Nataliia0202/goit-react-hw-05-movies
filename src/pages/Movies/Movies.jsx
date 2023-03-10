import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'components/Services/fetchMovies';
import {FilmsList} from 'components/FilmList/FilmsList';
import { SearchBar, SearchForm, SearchFormButton, SearchFormInput } from 'pages/Movies/Movies.styled';
import { toastInfoNothing, toastInfoDuplication, toastWarn, toastError } from 'components/Services/toasts';
import { ProgressBar } from 'react-loader-spinner';
import { ProgressBarStyle } from 'components/Services/fetchMovies';
import { Error } from 'components/Error';
import img from 'components/Images/404-Error-Websites.jpg';

export const Movies = () => {
    const [text, setText] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
  
  const searchQuery = searchParams.get('query') ?? '';
  
  const nextParams = text !== '' ? { query: text } : {};

  const inputText = event => {
    setText(event.currentTarget.value);
  }

    const searchFilms = event => {
      event.preventDefault();
      if (text.trim() === '') {
        return toastInfoNothing();
      }
      if (text === searchQuery.trim()) {
        return toastInfoDuplication();
      }
      setMovies([]);
      setSearchParams(nextParams);
      setText('');
    };

    

    useEffect(() => {
      if (!searchQuery) {
        return;
      }
      setLoading(true);
      try {
        getSearchMovie(searchQuery)
          .then(({ total_results, results }) => {
            if (total_results === 0) {
              toastWarn();
              setLoading(false);
              setError(true);
              return;
            }
            
            const onlyNeedValues = results.map(
              ({
                id,
                poster_path,
                title,
                vote_average,
                overview,
                genres,
                release_date,
              }) => ({
                id,
                poster_path,
                title,
                vote_average,
                overview,
                genres,
                release_date,
              })
            );
            setMovies([...onlyNeedValues]);
            setLoading(false);
            setError(false);
          })
          .finally(() => {
            setLoading(false);
          });
      } catch (error) {
        toastError();
      }
    }, [searchQuery]);


  return (
    <main style={{ flexGrow: '1' }}>
      <SearchBar>
        <SearchForm onSubmit={searchFilms}>
          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
            name="text"
            value={text}
            onChange={inputText}
          />
          <SearchFormButton type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
            </svg>
          </SearchFormButton>
        </SearchForm>
        {loading && <ProgressBar {...ProgressBarStyle} />}
      </SearchBar>
      {movies !== null && <FilmsList data={movies} />}
      {error && <Error errorImg={img} />}
    </main>
  );
};
