import React, { useEffect, useRef } from "react";

import * as styles from "./styles";
import { gsap } from "gsap";

const Overlay = () => {
  const { Wrapper, Bar } = styles;

  const tl = useRef(gsap.timeline({ paused: true, reversed: true })); // define timeline using useRef
  const wrapper = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".bar",
      { y: "100vh" },
      {
        duration: 1,
        y: "0",
        ease: "power4.inOut",
        stagger: { amount: 0.5 },
      }
    );
  
    return () => {
      // Cleanup function
      tl.current.kill(); // This will kill the timeline and its events
    };
  });

  return (
    <Wrapper ref={wrapper.current}>
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
    </Wrapper>
  );
};

export default Overlay;
