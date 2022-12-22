import styled from 'styled-components';
import { device } from 'components/GlobalStyles';

export const ReviewsList = styled.ul`
  @media ${device.mobileOnly} {
    text-align: center;
  }
  li {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
    p {
      color: #9c12c2;
    }
  }
`;