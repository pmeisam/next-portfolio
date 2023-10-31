"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ExperienceContainer,
  ExperienceCard,
  Title,
  Location,
  UnorderedList,
  Image,
  StyledCopy,
} from "./styles";
import Overlay from "components/overlay";
import { ExperienceProps } from "types/index";
gsap.registerPlugin(ScrollTrigger);

type Props = {
  items: ExperienceProps[];
};

const Work = ({ items }: Props) => {
  const tl = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    // gsap.to(".card", {
    //   x: 100,
    //   y: 100,
    //   duration: 3,
    //   scrollTrigger: { trigger: ".card" },
    // });
    // ScrollTrigger.create({
    //   trigger: ".card",
    //   markers: true,
    //   start: "top top",
    //   end: "+=500",
    // });
    // console.log("debugging!");
    // console.log(tl.current);
    // if (!tl.current) {
    //   console.log("in if");
    //   tl.current = gsap.timeline({
    //     paused: true,
    //     reversed: true,
    //     defaults: {
    //       duration: 0.75,
    //     },
    //   });
    //   tl.current
    //     .fromTo(
    //       ".work-title",
    //       { y: 150 },
    //       {
    //         y: 0,
    //         ease: "power3.out",
    //         stagger: {
    //           amount: 1,
    //         },
    //       }
    //     )
    //     .fromTo(
    //       "li",
    //       {
    //         x: "200vh",
    //         // autoAlpha: 0,
    //       },
    //       {
    //         x: 0,
    //         ease: "elastic.out(1, 1)",
    //         stagger: {
    //           each: 0.75,
    //           amount: 0.5,
    //         },
    //       },
    //       "+=0.25"
    //     );
    // }
  }, []);

  //   useEffect(() => {
  //     if (tl.current) tl.current.play();
  //     return () => {
  //       if (tl.current) {
  //         tl.current.pause();
  //       }
  //     };
  //   }, [items]);

  useEffect(() => {
    items.forEach((_, idx) => {
      gsap.to(`.card-${idx}`, {
        x: "10", // start state, items move from left
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: `.card-${idx}`,
          start: "top top", // You can adjust the start position
          // You can add more configurations if needed
        },
      });
    });
  }, [items]);

  return (
    <ExperienceContainer>
      {/* <Overlay /> */}
      {items &&
        items.map((item: ExperienceProps, idx: number) => {
          const { title, company, location, description, logo } = item;

          return (
            <ExperienceCard className={`card-${idx}`} key={idx}>
              <div style={{ width: "100%" }}>
                <Title className="work-title">
                  {title} at {company}
                </Title>
                <Location className="work-title" id="location">
                  {location}&nbsp;{}
                </Location>
                <UnorderedList>
                  <StyledCopy copy={description.json} />
                </UnorderedList>
              </div>
              {logo && (
                <picture>
                  <Image alt={logo.fileName} src={logo.url} />
                </picture>
              )}
              {/* <Skills /> */}
              {/* <Links /> */}
            </ExperienceCard>
          );
        })}
    </ExperienceContainer>
  );
};

export default Work;
