import React, { useEffect, useRef } from "react";

import * as styles from "./styles";
import { gsap } from "gsap";

const Overlay = () => {
  const { Wrapper, Bar } = styles;

  useEffect(() => {
    console.log("Overlay useEffect");
    const animation = gsap.fromTo(
      "[data-gsap='bar']",
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
      animation.kill(); // This will kill the timeline and its events
    };
  });

  return (
    <Wrapper>
      <Bar data-gsap="bar" />
      <Bar data-gsap="bar" />
      <Bar data-gsap="bar" />
      <Bar data-gsap="bar" />
      <Bar data-gsap="bar" />
      <Bar data-gsap="bar" />
      <Bar data-gsap="bar" />
      <Bar data-gsap="bar" />
      <Bar data-gsap="bar" />
      <Bar data-gsap="bar" />
    </Wrapper>
  );
};

export default Overlay;
