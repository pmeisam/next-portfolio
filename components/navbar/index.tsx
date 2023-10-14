"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Alkatra } from "next/font/google";

import { colors } from "theme";
import useGlobal from "context/global/useGlobal";
import { gsap, Power2 } from "gsap";

import * as styles from "./styles";

const alkatra = Alkatra({ subsets: ["latin"] });

const Navbar: React.FC = () => {
  const { data } = useGlobal();
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
  const pathName = usePathname();
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
    // const start = "M0 3000S237 1500 1500 1500S3000 3000 3000 3000V0H0Z";
    const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const end = "M0,1005S175,995,500,995s500,5,500,5V0H0Z";
    const power2 = "power2.inOut";
    const power4 = "power4.inOut";
    const btnColor = colors.vintage.orange;

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
          background: btnColor,
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
          background: btnColor,
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
          border: `1px solid ${btnColor}`,
          ease: power4,
        },
        "<"
      )
      .to(
        path.current,
        {
          duration: 0.8,
          ease: Power2.easeInOut,
          attr: {
            d: start,
          },
        },
        "<"
      )
      .to(
        path.current,
        {
          duration: 0.8,
          ease: Power2.easeInOut,
          attr: {
            d: end,
          },
        },
        ">"
      )
      .to(
        ".menu",
        {
          duration: 0.2,
          visibility: "visible",
          ease: "power3.out",
        },
        ">"
      );
    gsap.set(".menu", { visibility: "hidden" });
  }, []);

  useEffect(() => {
    if (tl.current) {
      tl.current.to(".link", {
        duration: 0.2,
        top: 0,
        ease: "power3.out",
        stagger: {
          amount: 0.5,
        },
      });
    }
  }, [data]);

  return (
    <Navbar className={alkatra.className}>
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
          <Path ref={path} d="M0 0S175 0 500 0S3000 0 3000 0V0H0Z"></Path>
        </Svg>
      </Overlay>
      <Menu className="menu">
        <PrimaryMenu>
          <MenuContainer>
            <MenuWrapper>
              {data?.navbar &&
                Object.keys(data?.navbar).map((key) => {
                  const numericKey = parseInt(key, 10);
                  const menuItem = data.navbar[key];
                  const classNames = `link ${numericKey % 2 === 0 && "ml-16"}`;
                  return (
                    <MenuItem key={key}>
                      <Link
                        className={classNames}
                        isActive={pathName === menuItem.path}
                        href={menuItem.path}
                        onClick={revealMenu}
                      >
                        <span>{key}</span>
                        {menuItem.title}
                      </Link>
                      <MenuItemRevealer></MenuItemRevealer>
                    </MenuItem>
                  );
                })}
            </MenuWrapper>
          </MenuContainer>
        </PrimaryMenu>
      </Menu>
    </Navbar>
  );
};

export default Navbar;
