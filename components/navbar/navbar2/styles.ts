"use client";
import styled, { css } from "styled-components";
import Link from "next/link";

import { colors, sizes, media } from "theme";

type Props = {
  isActive: boolean;
};

const Navbar = styled.div``;

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
  cursor: pointer;
`;

const AnimatedBorder = styled.div`
  @keyframes morph {
    0% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }

    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }

    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
  }
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid ${colors.vintage.red};
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: morph 4s linear infinite;
`;

const NonAnimatedBorder = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid ${colors.vintage.red};
  border-radius: 53% 47% 43% 57% / 51% 39% 61% 49%;
`;

const Hamburger = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  z-index: 2;
`;

const TopBun = styled.div`
  position: absolute;
  right: 0;
  display: inline-block;
  width: 18px;
  height: 1.25px;
  background: ${colors.vintage.red};
  transform: translateY(-4px);
  transition: transform 0.25s;
`;

const BottomBun = styled.div`
  position: absolute;
  top: 50%;
  display: inline-block;
  width: 24px;
  height: 1.25px;
  background: ${colors.vintage.red};
  transform: translateY(-50%);
  transition: transform 0.25s;
`;

const Overlay = styled.div``;

const Svg = styled.svg`
  position: fixed;
  height: 100vh;
  ${media.mediumSmall`
    height: auto;
  `}
`;

const Path = styled.path`
  fill: ${colors.vintage.black};
`;

const Menu = styled.div`
  position: fixed;
  top: 0;
  width: ${sizes.mainMenu.menu.width}vw;
  height: ${sizes.mainMenu.menu.height}vh;
  display: flex;
  visibility: hidden;
`;

const PrimaryMenu = styled.div`
  height: 100%;
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuContainer = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MenuWrapper = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${media.small`
      
  `}

  ${media.mediumSmall`
    
  `}
  ${media.medium`
  height: 100%;
  `}
`;
const MenuItem = styled.div`
  position: relative;
  :after {
    content: "";
    position: absolute;
    top: 100px;
    left: -20px;
    width: 120%;
    height: 200%;
    margin: 0 auto;
  }
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
      color: ${colors.vintage.red};
    `}

  span {
    font-size: 20px;
    margin-right: 2em;
  }

  &:hover {
    color: ${colors.vintage.orange};
    ${({ isActive }) =>
      isActive &&
      css`
        color: ${colors.vintage.red};
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

const MenuItemRevealer = styled.div``;

export {
  Navbar,
  Button,
  AnimatedBorder,
  NonAnimatedBorder,
  Hamburger,
  TopBun,
  BottomBun,
  Overlay,
  Svg,
  Path,
  Menu,
  PrimaryMenu,
  MenuContainer,
  MenuWrapper,
  MenuItem,
  StyledLink as Link,
  MenuItemRevealer,
};
