// ------------------------------ import libraries
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ------------------------------ import variables
import { spacing, shadows } from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.space1} ${spacing.space3};
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 80px;
`;

export const LinkedLogo = styled(Link)`
  outline: none;
  transition: 0.3s;

  &:focus {
    transform: scale(0.8);
  }
`;

export const Image = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: ${shadows.outsideShadow};
  cursor: pointer;
`;
