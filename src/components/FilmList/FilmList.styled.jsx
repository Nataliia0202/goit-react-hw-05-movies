import styled from 'styled-components';

export const FilmListSection = styled.main`
  height: 100%;
  margin-bottom: 32px;
`;

export const FilmListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  
`;

export const FilmListWrapper = styled.div`
  text-align: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.07);
  }
`;

export const FilmListTitle = styled.p`
  padding-top: 16px;
  font-weight: 700px;
  font-size: 16px;
  color: black;
  
`;
