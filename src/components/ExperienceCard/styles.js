// ------------------------------ import libraries
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// ------------------------------ import variables
import {
  border,
  shadows,
  colors,
  fonts,
  spacing,
} from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const CardStyled = styled(Link)`
  position: relative;
  border: ${border.border};
  border-radius: ${border.borderRadiusBig};
  box-shadow: ${shadows.outsideShadow};
  overflow: hidden;
  outline: none;

  &:focus {
    transform: scale(0.95);
    box-shadow: ${shadows.innerShadow};
  }

  div {
    padding: ${spacing.space2};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  /* grid styles for the home grid  */
  ${(props) =>
    props.position === 'home1' &&
    css`
      grid-column: 1 / span 1;
      grid-row: 1 / span 3;
    `}
  ${(props) =>
    props.position === 'home2' &&
    css`
      grid-column: 3 / span 3;
      grid-row: 1 / span 1;
    `}
      ${(props) =>
    props.position === 'home3' &&
    css`
      grid-column: 7 / span 1;
      grid-row: 1 / span 1;
    `}
      ${(props) =>
    props.position === 'home4' &&
    css`
      grid-column: 1 / span 1;
      grid-row: 5 / span 1;
    `}
      ${(props) =>
    props.position === 'home5' &&
    css`
      grid-column: 1 / span 3;
      grid-row: 7 / span 1;
    `}
      ${(props) =>
    props.position === 'home6' &&
    css`
      grid-column: 3 / span 1;
      grid-row: 3 / span 3;
    `}
      ${(props) =>
    props.position === 'home7' &&
    css`
      grid-column: 5 / span 3;
      grid-row: 3 / span 1;
    `}
      ${(props) =>
    props.position === 'home8' &&
    css`
      grid-column: 5 / span 1;
      grid-row: 5 / span 1;
    `}
      ${(props) =>
    props.position === 'home9' &&
    css`
      grid-column: 5 / span 1;
      grid-row: 7 / span 1;
    `}
      ${(props) =>
    props.position === 'home10' &&
    css`
      grid-column: 7 / span 1;
      grid-row: 5 / span 3;
    `}

      /* grid styles for the landing grid  */
      ${(props) =>
    props.position === 'landing1' &&
    css`
      grid-column: 1 / span 1;
      grid-row: 1 / span 2;
    `}
      ${(props) =>
    props.position === 'landing2' &&
    css`
      grid-column: 2 / span 1;
      grid-row: 1 / span 1;
    `}
      ${(props) =>
    props.position === 'landing3' &&
    css`
      grid-column: 3 / span 1;
      grid-row: 1 / span 1;
    `}
      ${(props) =>
    props.position === 'landing4' &&
    css`
      grid-column: 2 / span 2;
      grid-row: 2 / span 1;
    `};
`;

export const CardImg = styled.img`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  object-fit: cover;
`;

export const TitleCard = styled.p`
  position: absolute;
  margin: 0;
  z-index: 1;
  bottom: ${spacing.space1};
  color: ${colors.backgroundColor};
  font-size: ${fonts.h1};
  font-weight: ${fonts.bold};
  -webkit-text-stroke: 0.8px ${colors.titleColor};
`;