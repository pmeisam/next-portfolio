"use client";
import React, { useEffect, useRef } from "react";
import { ProjectProps } from "types";

import * as styles from "./styles";
import Copy from "components/copy";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProjectPage = ({ items }: { items: ProjectProps[] }) => {
  const {
    Spacer,
    Title,
    ProjectsWrapper,
    Left,
    DesktopContent,
    DesktopContentSection,
    H1,
    Right,
    DesktopPhotos,
    DesktopPhoto,
    Image,
    MobileContentWrapper,
    MobileContent,
    MobilePhoto,
  } = styles;

  const wrapperRef = useRef(null);
  const titleAnimation = useRef<gsap.core.Tween | null>(null);

  const setupScrollTrigger = () => {
    if (!!items) {
      const allPhotos = gsap.utils.toArray(".desktop-photo") as HTMLElement[];
      const photos = gsap.utils.toArray(".desktop-photo:not(:first-child)");
      const details = gsap.utils.toArray(
        ".desktop-content-section"
      ) as HTMLElement[];

      let mm = gsap.matchMedia();
      mm.add("(min-width: 600px)", () => {
        console.log("desktop");
        gsap.set(photos, { y: "100%" });

        ScrollTrigger.create({
          trigger: ".gallery",
          start: "top top",
          end: "bottom bottom",
          pin: ".right",
        //   markers: true,
        });

        details.forEach((detail, index) => {
          let headline = detail.querySelector("h1");

          let animation = gsap.timeline().to(allPhotos[index], {
            y: 0,
            duration: 3,
          });

          ScrollTrigger.create({
            trigger: headline,
            start: "top 80%",
            end: "top 50%",
            animation: animation,
            scrub: 3,
            // markers: true,
            onEnter: () => {
              if (wrapperRef.current) {
                const currentBgColor = getComputedStyle(
                  wrapperRef.current
                ).backgroundColor;

                gsap.to(wrapperRef.current, {
                  //   background: `linear-gradient(${items[index].backgroundColor}, ${currentBgColor})`,
                  background: items[index].backgroundColor,
                  duration: 1,
                  ease: "power2.out",
                });
              } else {
                console.log("wrapperRef.current is not available"); // Logs if the ref isn't available
              }
            },
            onLeaveBack: () => {
              // when the headline leaves the top of the viewport (scrolling back up)
              const prevIndex = index - 1;
              if (prevIndex >= 0 && wrapperRef.current) {
                const currentBgColor = getComputedStyle(
                  wrapperRef.current
                ).backgroundColor;

                gsap.to(wrapperRef.current, {
                  //   background: `linear-gradient(${items[prevIndex].backgroundColor}, ${currentBgColor})`,
                  background: items[prevIndex].backgroundColor,
                  duration: 1.5,
                  ease: "power2.out",
                });
              } else if (wrapperRef.current) {
                gsap.to(wrapperRef.current, {
                  background: `#FFFFFF`,
                  duration: 0.75,
                  ease: "power2.out",
                });
              }
            },
          });
        });
      });
    }
  };

  useEffect(() => {
    console.log(document.querySelectorAll("[data-gsap='project-title-char']"));
    // titleAnimation.current = gsap.fromTo(
    //   "[data-gsap='project-title-char']",
    //   { y: "110vh", x: 100 },
    //   {
    //     duration: 1.5,
    //     y: 100,
    //     ease: "power4.inOut",
    //     stagger: { amount: 0.5 },
    //   }
    // );

    // gsap.fromTo(
    //   ".gallery",
    //   { y: "80vh" },
    //   {
    //     y: "0",
    //     duration: 2,
    //     ease: "power3.inOut",
    //     onComplete: setupScrollTrigger,
    //   }
    // );
    setupScrollTrigger()
    // titleAnimation.current?.play();

    return () => {
      // optional
      // custom cleanup code here (runs when it STOPS matching)
      console.log("mobile");
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [items]);

  useEffect(() => {}, [items]);

  useEffect(() => {
    return () => {
      console.log(titleAnimation.current);
      //   gsap.killTweensOf(".gallery");
      //   gsap.killTweensOf("[data-gsap='project-title-char']");
      //   titleAnimation.current?.kill();
    };
  }, []);

  //   if (!items) return null;

  return (
    <div>
      <Spacer>
        {"Projects".split("").map((word: string, index: number) => (
          <React.Fragment key={index}>
            {word.split("").map((char: string, charIndex: number) => {
              return (
                <Title
                  data-gsap="project-title-char"
                  className="project-title-char"
                  key={`${char}-${charIndex}`}
                >
                  {char}
                </Title>
              );
            })}
          </React.Fragment>
        ))}
      </Spacer>
      <ProjectsWrapper className="gallery" ref={wrapperRef}>
        <Left>
          <DesktopContent>
            {items.map((item, idx) => {
              return (
                <DesktopContentSection
                  key={item.title + idx}
                  className="desktop-content-section"
                >
                  <H1>{item.title}</H1>
                  <Copy copy={item.description.json} />
                </DesktopContentSection>
              );
            })}
          </DesktopContent>
        </Left>
        <Right className="right">
          <MobileContentWrapper>
            {items.map((item, idx) => {
              return (
                <MobileContent key={`${item.title}___${idx}`}>
                  <MobilePhoto>
                    <Image src={item.galleryCollection.items[0].url} />
                  </MobilePhoto>
                  <H1>Green</H1>
                  <Copy copy={item.description.json} />
                </MobileContent>
              );
            })}
          </MobileContentWrapper>
          <DesktopPhotos>
            {items.map((item, idx) => {
              const url =
                item.galleryCollection &&
                item.galleryCollection.items.length > 0
                  ? item.galleryCollection.items[0].url
                  : null;
              return (
                <DesktopPhoto
                  className="desktop-photo"
                  key={item.title + "-" + idx}
                  style={{ background: item.backgroundColor }}
                >
                  {url && <Image src={url} />}
                </DesktopPhoto>
              );
            })}
          </DesktopPhotos>
        </Right>
      </ProjectsWrapper>
    </div>
  );
};

export default ProjectPage;

{
  /* */
}
