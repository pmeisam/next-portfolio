"use client";
import React, { useEffect, useRef, useLayoutEffect } from "react";

import { fetchHome } from "redux/features/contentfulSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "redux/store";

import { gsap } from "gsap";
import * as styles from "./styles";


export default function Home() {
  const { Wrapper, TitleWrapper, Title, Space, CopyP: Copy, Btn: Button } = styles;
  const dispatch = useDispatch<AppDispatch>();
  const homeData = useSelector(
    (state: any) => state.contentful.data?.portfolio
  );
  const tl = useRef(gsap.timeline({ paused: true, reversed: true }));

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

    tl.current.play();

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
      <TitleWrapper>
        {homeData.title.split(" ").map((word: string, index: number) => (
          <React.Fragment key={index}>
            {word.split("").map((char: string, charIndex: number) => (
              <Title className="title-char" key={`${char}-${charIndex}`}>
                {char}
              </Title>
            ))}
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
