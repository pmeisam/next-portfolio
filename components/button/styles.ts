import styled, { css } from "styled-components";
import { colors } from "theme/colors";

const style = css`
  border: none;
  background: ${colors.premier.red};
  width: 16rem;
  height: 3rem;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  border-radius: 2px;
  &:hover {
    background: ${colors.premier.darkPurple};
    /* color: ${colors.premier.darkPurple}; */
  }
`;
export const Button = styled.button`
  ${style}
`;
export const Link = styled.a`
  ${style}
`;
