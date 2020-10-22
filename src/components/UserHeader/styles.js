// ------------------------------ import libraries
import styled from 'styled-components';
// ------------------------------ import variables
import { spacing } from '../../global-styles/Variables';

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