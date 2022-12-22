import { Outlet } from 'react-router-dom';
import {
  AppBarList,
  AppBarItem,
  NavTitle,
  Container,
  Header,
} from './GlobalStyles';

export const AppBar = () => {
  return (
    <>
      <Container>
        <Header>
          <nav>
            <AppBarList>
              <AppBarItem>
                <NavTitle to="/">Home</NavTitle>
              </AppBarItem>
              <AppBarItem>
                <NavTitle to="/movies">Movies</NavTitle>
              </AppBarItem>
            </AppBarList>
          </nav>
        </Header>
        <Outlet />
      </Container>
    </>
  );
};
