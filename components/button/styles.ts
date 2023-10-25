import styled, { css } from "styled-components";
import { colors } from "theme/colors";

const style = css`
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
    background: ${colors.premier.yellow};
    color: ${colors.premier.darkPurple};
  }
`;
export const Button = styled.button`
  ${style}
`;
export const Link = styled.a`
  ${style}
`;
