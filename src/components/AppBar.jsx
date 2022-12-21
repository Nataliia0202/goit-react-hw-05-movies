import { AppBarList, AppBarItem, NavTitle } from './GlobalStyles';

export const AppBar = () => {
    return (
      <>
        <header
          style={{
            marginBottom: '32px',
            padding: '6px',
            backgroundColor: '#483233',
          }}
        >
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
        </header>
      </>
    );
};
