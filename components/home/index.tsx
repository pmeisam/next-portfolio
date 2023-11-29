"use client";
import React, { useEffect, useRef } from "react";

// import { gsap } from "gsap";
import * as styles from "./styles";
import Overlay from "components/overlay";

import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"], weight: "900" });

export default function Home({ data }: { data: any }) {
  const {
    Wrapper,
    TitleWrapper,
    Title,
    Space,
    CopyP: Copy,
    Btn: Button,
  } = styles;
  // const titleAnimation = useRef<gsap.core.Tween | null>(null);
  // const copyAnimation = useRef<gsap.core.Tween | null>(null);
  // const btnAnimation = useRef<gsap.core.Tween | null>(null);

  // useEffect(() => {
  //   // Create the animations on initial mount
  //   titleAnimation.current = gsap.from("[data-gsap='title-char']", {
  //     duration: 1.5,
  //     y: 700,
  //     ease: "power4.inOut",
  //     stagger: { amount: 0.5 },
  //   });
  //   copyAnimation.current = gsap.from("#copy", {
  //     duration: 2,
  //     y: 700,
  //     ease: "power4.inOut",
  //   });
  //   btnAnimation.current = gsap.from("#btn", {
  //     duration: 2.5,
  //     y: 700,
  //     ease: "power4.inOut",
  //   });
  // });

  // useEffect(() => {
  //   // Only play the animation if the data is available
  //   titleAnimation.current?.play();
  //   copyAnimation.current?.play();
  //   btnAnimation.current?.play();
  // }, [data]);

  // useEffect(() => {
  //   // Reset the state on unmount
  //   return () => {
  //     gsap.set("[data-gsap='title-char']", { y: 0 });
  //     gsap.set("#copy", { y: 0 });
  //     gsap.set("#btn", { y: 0 });
  //     titleAnimation.current?.kill();
  //     copyAnimation.current?.kill();
  //     btnAnimation.current?.kill();
  //   };
  // }, []);

  if (!data) return null;

  return (
    <Wrapper>
      <TitleWrapper className={raleway.className}>
        {data.title.split(" ").map((word: string, index: number) => (
          <React.Fragment key={index}>
            {word.split("").map((char: string, charIndex: number) => {
              const idNames =
                word.toLowerCase() === "meisam." && char !== "."
                  ? "premier-red"
                  : "";
              return (
                <Title
                  data-gsap="title-char"
                  className={idNames}
                  key={`${char}-${charIndex}`}
                >
                  {char}
                </Title>
              );
            })}
            {index !== data.title.split(" ").length - 1 && (
              <Space>&nbsp;</Space>
            )}
          </React.Fragment>
        ))}
      </TitleWrapper>
      <Copy id="copy" copy={data.description.json} />
      <Button id="btn" href={data.resume.url}>
        Download My Resume
      </Button>
    </Wrapper>
  );
}
