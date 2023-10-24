import React, { useEffect, useRef, useState } from "react";
import { gsap, Sine } from "gsap";

import { colors } from "theme";
import * as styles from "./styles";

const HamburgerMenu = ({
  onClick,
  isOpen,
}: {
  onClick: any;
  isOpen: boolean;
}) => {
  const { Wrapper } = styles;
  const tl = useRef(
    gsap.timeline({
      paused: true,
      reversed: true,
    })
  );
  const [initalRender, setInitalRender] = useState(true);

  const handleClick = () => {
    onClick();
    if (tl.current) {
      tl.current.reversed()
        ? tl.current.timeScale(1).play()
        : tl.current.reverse();
    }
  };

  useEffect(() => {
    !tl.current.reversed() && tl.current.reverse();
  }, [isOpen]);

  useEffect(() => {
    if (initalRender) {
      gsap.fromTo(
        ".hamburger",
        { opacity: 0, x: 100 },
        { x: 0, opacity: 1, ease: "power4.inOut", delay: 1, duration: 2 }
      );
      setInitalRender(false);
    }
  });

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
      reversed: true,
    });
    tl.current
      .to(
        ".top",
        {
          y: "-5px",
          transformOrigin: "50% 50%",
          ease: Sine.easeInOut,
          duration: 0.5,
        },
        "topBotStar"
      )
      .to(
        ".bot",
        {
          y: "5px",
          transformOrigin: "50% 50%",
          ease: Sine.easeInOut,
          duration: 0.5,
        },
        "topBotStar"
      )
      .to(
        ".mid",
        {
          autoAlpha: 0,
          x: "-40px",
          transformOrigin: "50% 50%",
          ease: Sine.easeInOut,
          duration: 0.2,
        },
        "-=0.2"
      )
      .add("finish")
      .to(
        ".top",
        {
          y: "5px",
          rotation: -45,
          transformOrigin: "50% 50%",
          ease: Sine.easeInOut,
          duration: 0.5,
        },
        "finish"
      )
      .to(
        ".bot",
        {
          y: "-5px",
          rotation: 45,
          transformOrigin: "50% 50%",
          ease: Sine.easeInOut,
          duration: 0.5,
        },
        "finish"
      )
      .to("#burger", {
        rotation: 360,
        transformOrigin: "50% 50%",
        ease: Sine.easeInOut,
        duration: 0.5,
        fill: colors.white,
      });
    return () => {
      // Cleanup function
      tl.current.kill(); // This will kill the timeline and its events
    };
  }, []);

  return (
    <Wrapper className="hamburger" onClick={handleClick}>
      <svg
        id="burger"
        fill={colors.premier.green}
        width="30"
        className="openmenu"
        viewBox="0 0 30 30"
      >
        <path className="top" d="M0 9h30v2H0z" />
        <line
          className="mid"
          x1="0"
          y1="15"
          x2="30"
          y2="15"
          stroke={colors.premier.green}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <path className="bot" d="M0 19h30v2H0z" />
      </svg>
    </Wrapper>
  );
};

export default HamburgerMenu;
