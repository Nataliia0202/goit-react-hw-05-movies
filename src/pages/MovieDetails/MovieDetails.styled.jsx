import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'components/GlobalStyles';


export const MovieDetailsMain = styled.main`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 16px;
  span {
    display: block;
    @media ${device.tablet} {
      margin-bottom: 32px;
    }
  }
`;

export const MovieDetailsMainWrapper = styled.div`
  @media ${device.mobileOnly} {
    text-align: center;
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    display: inline-block;
    max-height: 500px;
    max-width: 400px;
  }
`;

export const MovieDetailsInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media ${device.tablet} {
    margin-left: 32px;
  }
  h2 {
    color: #5b0a6c;
  }
  h3 {
    color: #7a2382;
  }
  span {
    max-width: 1200px;
  }
`;

export const MovieDetailsGenresList = styled.ul`
  display: flex;
  @media ${device.mobileOnly} {
    justify-content: center;
  }
  li {
    &:not(:first-child) {
      margin-left: 16px;
    }
  }
`;

export const MovieDetailsAdditionalWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1600px;
  margin: 32px auto;
  h3 {
    color: #6c0a66;
  }
`;

export const MovieDetailsAdditionalNavigate = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  li {
    margin-top: 16px;
    padding: 8px;
    border-radius: 8px;
    border: 2px solid #540458;
    background-color: #d0a0cd;
    &:not(:first-child) {
      margin-left: 16px;
    }
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: scale(1.15);
      box-shadow: 0px 5px 10px bisque;
      background-color: #ae66a9;
    }
  }
`;

export const NavTitle = styled(NavLink)`
  padding: 8px;
  color: #6c0a66;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #c4a1c2;
  }
`;

