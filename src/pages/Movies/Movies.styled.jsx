import styled from 'styled-components';

export const SearchBar = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-top: 16px;
  padding-right: 32px;
  padding-bottom: 16px;
  padding-left: 32px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  background-color: bisque;
  border: 2px solid #6d031c;
  border-radius: 4px;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: #a79086;
  &:hover {
    opacity: 1;
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 16px;
  border: none;
  outline: none;
  padding-left: 16px;
  padding-right: 16px;
  background-color: bisque;
  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;
