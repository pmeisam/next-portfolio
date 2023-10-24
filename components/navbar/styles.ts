"use client";
import styled, { css } from "styled-components";
import Link from "next/link";

import { colors, sizes, media } from "theme";

type Props = {
  isActive: boolean;
};

const Navbar = styled.div`
  position: relative;
  z-index: 1000;
`;

const Button = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: ${sizes.mainMenu.button.mobile}px;
  height: ${sizes.mainMenu.button.mobile}px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2em;
  z-index: 2;
`;

const Overlay = styled.div`
  position: absolute;
  top: -100vh;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Bar = styled.div`
  position: relative;
  width: 10vw;
  height: 100vh;
  top: -100vh;
  background: ${colors.premier.darkerPurple};
`;
const Menu = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20vw;
`;

const MenuItem = styled.div`
  width: 80vw;
  position: relative;
`;

const StyledLink = styled(Link)<Props>`
  position: relative;
  top: 20px;
  line-height: 70%;
  text-decoration: none;
  color: ${colors.vintage.beige};
  text-transform: uppercase;
  font-size: 35px;
  font-weight: 700;
  z-index: 2;
  opacity: 0;

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${colors.premier.green};
    `}

  span {
    font-size: 20px;
    margin-right: 2em;
  }

  &:hover {
    color: ${colors.premier.red};
    ${({ isActive }) =>
      isActive &&
      css`
        color: ${colors.premier.green};
        cursor: default;
      `}
  }

  ${media.small`
      top: 80px;
      font-size: 65px;
  `}

  ${media.mediumSmall`
      top: 100px;
      font-size: 95px;
      font-weight: 500;
  `}
  ${media.medium`
      top: 120px;
      font-size: 125px;
  `}
`;

export { Navbar, Button, Overlay, Bar, Menu, MenuItem, StyledLink as Link };
