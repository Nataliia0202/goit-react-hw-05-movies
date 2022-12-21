import styled, { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import { NavLink } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f0e4ed;
       
        
    }
    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    h1,h2,h3,h4,h5,h6,p {
        margin: 0;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
    }
`;

const size = {
  mobile: '480',
  tablet: '768',
  desktop: '1280',
};

export const device = {
  mobile: `(min-width: ${size.mobile}px)`,
  mobileOnly: `(max-width: ${size.tablet - 0.02}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  tabletOnly: `(max-width: ${size.desktop - 0.02}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
};

export const AppBarItem = styled.li`
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.15);
    text-shadow: 0px 5px 10px #f2ebf1;
  }
  &:not(:first-child) {
    margin-left: 32px;
  }
`;

export const NavTitle = styled(NavLink)`
  font-weight: 500px;
  font-size: 32px;
  color: #fff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    color: #4d145a;
  }
`;

export const ErrorSection = styled.section`
  text-align: center;
  padding: 16px;
  img {
    padding-bottom: 32px;
    display: block;
    margin: 0 auto;
  }
`;

export const NavButton = styled(NavLink)`
  padding: 8px;
  border-radius: 8px;
  border: 2px solid #af2f4d;
  color: #af2f4d;
  background-color: #efebe7;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #efebe7;
    background-color: #af2f4d;
  }
`;

export const AdditionalMessageStyle = styled.span`
  text-align: center;
`;

export const AppBarList = styled.ul`
  display: flex;
  padding: 15px;
  justify-content: flex-end;
`;
