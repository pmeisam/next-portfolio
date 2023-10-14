"use client";
import React, { useEffect, useRef } from "react";
import * as styles from "./styles";
import { gsap, Power2 } from "gsap";

const Navbar: React.FC = () => {
  const { Navbar } = styles;
  const tl = useRef(gsap.timeline({ paused: true, reversed: true })); // define timeline using useRef
  const path = useRef<SVGPathElement>(null);
  const hamburger = useRef<HTMLDivElement>(null);

  const revealMenu = () => {
    hamburger.current?.classList.toggle("active");
    if (tl.current) {
      tl.current.reversed() ? tl.current.play() : tl.current.reverse();
    }
  };

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true, reversed: true });
    const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const end = "M0,1005S175,995,500,995s500,5,500,5V0H0Z";
    const power2 = "power2.inOut";
    const power4 = "power4.inOut";

    tl.current
      .to("#hamburger", {
        duration: 1.25,
        marginTop: "-5px",
        x: -40,
        y: 40,
        ease: power4,
      })
      .to(
        ".span1",
        {
          duration: 1,
          background: "#e2e2dc",
          ease: power2,
          rotation: 45,
          width: "24px",
          top: "13px",
        },
        "<"
      )
      .to(
        ".span2",
        {
          duration: 1,
          background: "#e2e2dc",
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
          border: "1px solid #e2e2dc",
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
        "-0.5"
      )
      .to(
        ".menu-item > a",
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

    gsap.set(".span1", { background: "#000" });
    gsap.set(".menu", { visibility: "hidden" });
  }, []);

  return (
    <Navbar>
      <div className="btn" id="toggle-btn" onClick={revealMenu}>
        <div className="btn-outline btn-outline-1"></div>
        <div className="btn-outline btn-outline-2"></div>
        <div id="hamburger" ref={hamburger}>
          <span className="span1"></span>
          <span className="span2"></span>
        </div>
      </div>
      <div className="overlay">
        <svg viewBox="0 0 1000 1000">
          <path ref={path} d="M0 2S175 1 500 1s500 1 500 1V0H0Z"></path>
        </svg>
      </div>
      <div className="menu">
        <div className="primary-menu">
          <div className="menu-container">
            <div className="wrapper">
              <div className="menu-item">
                <a href="#">
                  <span>I</span>Home
                </a>
                <div className="menu-item-revealer"></div>
              </div>
              <div className="menu-item">
                <a href="#">
                  <span>II</span>Work
                </a>
                <div className="menu-item-revealer"></div>
              </div>
              <div className="menu-item">
                <a href="#">
                  <span>III</span>Projects
                </a>
                <div className="menu-item-revealer"></div>
              </div>
              <div className="menu-item">
                <a href="#">
                  <span>IV</span>Contact me
                </a>
                <div className="menu-item-revealer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default Navbar;
