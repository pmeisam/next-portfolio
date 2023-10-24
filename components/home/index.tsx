"use client";
import React, { useEffect, useRef, useLayoutEffect } from "react";

import { fetchHome } from "redux/features/contentfulSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "redux/store";

import { gsap } from "gsap";
import * as styles from "./styles";
import { Raleway } from "next/font/google";
import Overlay from "components/overlay";

const raleway = Raleway({ subsets: ["latin"], weight: "900" });

export default function Home() {
  const {
    Wrapper,
    TitleWrapper,
    Title,
    Space,
    CopyP: Copy,
    Btn: Button,
  } = styles;
  const dispatch = useDispatch<AppDispatch>();
  const homeData = useSelector(
    (state: any) => state.contentful.data?.portfolio
  );
  // const tl = useRef(gsap.timeline({ paused: true, reversed: true }));

  useLayoutEffect(() => {
    if (!homeData) return;

    gsap.from(".title-char", {
      duration: 1.5,
      y: 700,
      ease: "power4.inOut",
      stagger: { amount: 0.5 },
    });
    gsap.from(".copy", {
      duration: 2,
      y: 700,
      ease: "power4.inOut",
    });
    gsap.from(".btn", {
      duration: 2.5,
      y: 700,
      ease: "power4.inOut",
    });

    // tl.current.play();

    return () => {
      gsap.killTweensOf(".title-char");
      gsap.killTweensOf(".copy");
    };
  }, [homeData]);

  useEffect(() => {
    dispatch(fetchHome());
  }, [dispatch]);

  if (!homeData) return null;
  return (
    <Wrapper>
      <Overlay />

      <TitleWrapper className={raleway.className}>
        {homeData.title.split(" ").map((word: string, index: number) => (
          <React.Fragment key={index}>
            {word.split("").map((char: string, charIndex: number) => {
              console.log(word.toLowerCase() === "meisam.");
              const className =
                word.toLowerCase() === "meisam." && char !== "."
                  ? "title-char premier-green"
                  : "title-char";
              return (
                <Title className={className} key={`${char}-${charIndex}`}>
                  {char}
                </Title>
              );
            })}
            {index !== homeData.title.split(" ").length - 1 && (
              <Space>&nbsp;</Space>
            )}
          </React.Fragment>
        ))}
      </TitleWrapper>
      <Copy className="copy" copy={homeData.description.json} />
      <Button className="btn" href={homeData.resume.url}>
        Download My Resume
      </Button>
    </Wrapper>
  );
}
