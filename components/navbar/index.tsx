"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { gsap } from "gsap";

import * as styles from "./styles";
import HamburgerMenu from "components/hamburger";

import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"], weight: "900" });

const Navbar = ({ data }: { data: any }) => {
  const { Navbar, Button, Overlay, Bar, Menu, MenuItem, Link } = styles;
  const pathName = usePathname();
  const tl = useRef(gsap.timeline({ paused: true, reversed: true })); // define timeline using useRef
  const [isOpen, setIsOpen] = useState(false);

  const revealMenu = () => {
    if (tl.current) {
      tl.current.reversed()
        ? tl.current.timeScale(1).play()
        : tl.current.timeScale(3).reverse();
    }
  };

  function numberToRomanNumerals(num: number) {
    if (num < 1 || num > 3999) {
      throw new Error("Only numbers between 1 and 3999 are supported.");
    }

    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const numerals = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];

    let result = "";

    for (let i = 0; i < values.length; i++) {
      while (num >= values[i]) {
        num -= values[i];
        result += numerals[i];
      }
    }

    return result;
  }

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
      reversed: true,
      defaults: {
        duration: 1,
      },
    });

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
    <Navbar className={raleway.className}>
      <Button className="button">
        <HamburgerMenu isOpen={isOpen} onClick={revealMenu} />
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
        {!!data &&
          Object.keys(data).map((key) => {
            const numericKey = parseInt(key, 10);
            const menuItem = data[key];
            const isActive = numericKey % 2 === 0 ? true : false;
            const classNames = `link ${isActive && "ml-16"}`;
            return (
              <MenuItem key={key}>
                <Link
                  className={classNames}
                  isActive={pathName === menuItem.path}
                  href={menuItem.path}
                  onClick={() => {
                    revealMenu();
                    setIsOpen((prevIsOpen) => !prevIsOpen);
                  }}
                >
                  <span>{numberToRomanNumerals(Number(key))}</span>
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
