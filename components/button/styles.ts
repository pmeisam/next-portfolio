import styled, { css } from "styled-components";
import { colors } from "theme/colors";

const style = css`
  //=== Drawing effect

  //=== Button styling, semi-ignore
  .btn {
    background: none;
    border: none;
    cursor: pointer;
    line-height: 1.5;
    font: 700 1.2rem "Roboto Slab", sans-serif;
    padding: 1em 2em;
    letter-spacing: 0.05rem;

    &:focus {
      outline: 2px dotted #55d7dc;
    }
  }
  border: none;
  background: ${colors.premier.green};
  width: 16rem;
  height: 3rem;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.premier.darkPurple};
  border-radius: 2px;
  text-transform: uppercase;
  &:hover {
    background: ${colors.premier.blue};
    /* color: ${colors.premier.darkPurple}; */
  }
`;
export const Button = styled.button`
  ${style}
`;
export const Link = styled.a`
  ${style}
`;
