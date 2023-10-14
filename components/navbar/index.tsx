"use client";
import React, { useEffect, useRef } from "react";
import * as styles from "./styles";
import { colors } from "theme";
import { gsap, Power2 } from "gsap";

const Navbar: React.FC = () => {
  const {
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
    Link,
    MenuItemRevealer,
  } = styles;
  const hamburger = useRef<HTMLDivElement>(null);
  const tl = useRef(gsap.timeline({ paused: true, reversed: true })); // define timeline using useRef
  const path = useRef<SVGPathElement>(null);

  const revealMenu = () => {
    hamburger.current?.classList.toggle("active");
    if (tl.current) {
      tl.current.reversed() ? tl.current.play() : tl.current.reverse();
    }
  };

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true, reversed: true });
    const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const mid = "M 0 502 S 187 313 553 315 s 500 267 491 240 V -361 H 1 Z";
    const end = "M0,1005S175,995,500,995s500,5,500,5V0H0Z";
    const power2 = "power2.inOut";
    const power4 = "power4.inOut";

    tl.current
      .to("#hamburger", {
        duration: 1.25,
        x: -40,
        y: 40,
        ease: power4,
      })
      .to(
        ".top-bun",
        {
          duration: 1,
          background: colors.rose,
          ease: power2,
          rotation: 45,
          width: "24px",
          top: "13px",
        },
        "<"
      )
      .to(
        ".bottom-bun",
        {
          duration: 1,
          background: colors.rose,
          ease: power2,
          width: "24px",
          rotation: -45,
          right: "0px",
        },
        "<"
      )
      .to(
        ".btn .btn-outline",
        {
          duration: 1.25,
          x: -40,
          y: 40,
          width: "140px",
          height: "140px",
          border: `1px solid ${colors.rose}`,
          ease: power4,
        },
        "<"
      )
      .to(
        path.current,
        {
          duration: 0.8,
          attr: {
            d: start,
          },
          ease: Power2.easeIn,
        },
        "<"
      )
      .to(
        path.current,
        {
          duration: 0.8,
          attr: {
            d: end,
          },
          ease: Power2.easeIn,
        },
        ">"
      )
      .to(
        ".menu",
        {
          duration: 1,
          visibility: "visible",
        },
        "<"
      )
      .to(
        ".link",
        {
          duration: 1,
          top: 0,
          ease: "power3.out",
          stagger: {
            amount: 0.5,
          },
        },
        "-=1"
      );
    gsap.set(".menu", { visibility: "hidden" });
  }, []);

  return (
    <Navbar>
      <Button className="btn" id="toggle-btn" onClick={revealMenu}>
        <AnimatedBorder className="btn-outline btn-outline-1"></AnimatedBorder>
        <NonAnimatedBorder className="btn-outline btn-outline-2"></NonAnimatedBorder>
        <Hamburger id="hamburger" ref={hamburger}>
          <TopBun className="top-bun" />
          <BottomBun className="bottom-bun" />
        </Hamburger>
      </Button>
      <Overlay className="overlay">
        <Svg viewBox="0 0 1000 1000">
          <Path ref={path} d="M0 2S175 1 500 1s500 1 500 1V0H0Z"></Path>
        </Svg>
      </Overlay>
      <Menu className="menu">
        <PrimaryMenu>
          <MenuContainer>
            <MenuWrapper>
              <MenuItem>
                <Link className="link" href="#">
                  <span>I</span>Home
                </Link>
                <MenuItemRevealer></MenuItemRevealer>
              </MenuItem>
              <MenuItem>
                <Link className="link ml-16" href="#">
                  <span>II</span>Work
                </Link>
                <MenuItemRevealer></MenuItemRevealer>
              </MenuItem>
              <MenuItem>
                <Link className="link" href="#">
                  <span>III</span>Projects
                </Link>
                <MenuItemRevealer></MenuItemRevealer>
              </MenuItem>
              <MenuItem>
                <Link className="link ml-16" href="#">
                  <span>IV</span>Contact
                </Link>
                <MenuItemRevealer></MenuItemRevealer>
              </MenuItem>
            </MenuWrapper>
          </MenuContainer>
        </PrimaryMenu>
      </Menu>
    </Navbar>
  );
};

export default Navbar;
