import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { colors } from "theme/colors";
import { Raleway } from "next/font/google";
import { gsap } from "gsap";

const raleway = Raleway({ subsets: ["latin"], weight: "900" });

const Wrapper = styled.div``;

const Overlay = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const Bar = styled.div`
  width: 10vw;
  height: 100vh;
  background: ${colors.premier.darkPurple};
`;

const Counter = styled.h1`
  position: fixed;
  bottom: 1rem;
  right: 2rem;
  font-size: 17rem;
  color: ${colors.premier.green};
`;

const Loading = () => {
  const [count, setCount] = useState(1);

  const tl = useRef(gsap.timeline({ paused: true, reversed: true })); // define timeline using useRef

  useEffect(() => {
    console.log("effect started");
    // Update the count every 40 milliseconds for 4 seconds to reach 100
    const interval = setInterval(() => {
      setCount((prevCount) => Math.min(prevCount + 4, 100));
    }, 125);

    // Clear the interval after 4 seconds or when the component is unmounted
    setTimeout(() => {
      clearInterval(interval);
    }, 5000);

    return () => {
      tl.current.play();
      clearInterval(interval);
    };
  });

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
      reversed: true,
      defaults: {
        duration: 1,
      },
    });

    tl.current
      .to(".counter", {
        delay: 3.5,
        visibility: "hidden",
        duration: 0,
      })
      .to(".bar", {
        y: "-100vh",
        ease: "power3.inOut",
        stagger: { amount: 0.5 },
      });
  }, []);

  return (
    <Wrapper className={raleway.className}>
      <Overlay>
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
        <Bar className="bar" />
        <Bar className="bar" />
        <Bar className="bar" />
        <Bar className="bar" />
        <Bar className="bar" />
        <Bar className="bar" />
      </Overlay>
      <Counter className="counter">{count}</Counter>
    </Wrapper>
  );
};

export default Loading;
