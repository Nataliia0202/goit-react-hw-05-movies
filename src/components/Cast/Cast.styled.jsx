import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  li {
    height: 407px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 16px;
    width: 280px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: scale(1.1);
    }
    img {
      width: 200px;
      height: 300px;
      border-radius: 8px;
      border: 2px solid #7f0687;
    }
    p {
      color: #600b74;
    }
    span {
      color: #8e2585;
    }
  }
`;
