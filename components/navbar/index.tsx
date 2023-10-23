"use client";
import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import { colors } from "theme";
import useGlobal from "context/global/useGlobal";
import { gsap } from "gsap";

import * as styles from "./styles";
import HamburgerMenu from "components/hamburger";

const Navbar = () => {
  const { Navbar, Button, Overlay, Bar, Menu, MenuItem, Link } = styles;
  const { navbar } = useGlobal();
  const pathName = usePathname();
  const tl = useRef(gsap.timeline({ paused: true, reversed: true })); // define timeline using useRef

  const revealMenu = () => {
    if (tl.current) {
      tl.current.reversed()
        ? tl.current.timeScale(1).play()
        : tl.current.timeScale(3).reverse();
    }
  };

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
      reversed: true,
      defaults: {
        duration: 1,
      },
    });
    const btnColor = colors.vintage.red;

    tl.current
      .to(".overlay", { y: "100vh", duration: 0 })
      .to(".bar", {
        y: "100vh",
        ease: "power3.inOut",
        stagger: { amount: 1 },
      })
      .to(".button", {
        x: -40,
        y: 40,
      })
      .to(
        ".menu",
        {
          visibility: "visible",
          ease: "power2.in",
          duration: 0,
        },
        "<"
      )
      .to(".link", {
        top: 0,
        opacity: 1,
        ease: "power3.out",
        stagger: {
          amount: 0.5,
        },
        duration: 0.2,
      });
    gsap.set(".menu", { visibility: "hidden" });
  }, []);

  return (
    <Navbar>
      <Button className="button">
        <HamburgerMenu onClick={revealMenu} />
      </Button>
      <Overlay className="overlay">
        <Bar className="bar" />
        <Bar className="bar" />
        <Bar className="bar" />
        <Bar className="bar" />
        <Bar className="bar" />
        <Bar className="bar" />
        <Bar className="bar" />
        <Bar className="bar" />
        <Bar className="bar" />
        <Bar className="bar" />
      </Overlay>
      <Menu className="menu">
        {!!navbar &&
          Object.keys(navbar).map((key) => {
            const numericKey = parseInt(key, 10);
            const menuItem = navbar[key];
            const isActive = numericKey % 2 === 0 ? true : false;
            const classNames = `link ${isActive && "ml-16"}`;
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
              </MenuItem>
            );
          })}
      </Menu>
    </Navbar>
  );
};

export default Navbar;
