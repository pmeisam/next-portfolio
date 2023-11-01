"use client";
import React, { useEffect } from "react";
import { ProjectProps } from "types";

import * as styles from "./styles";
import Copy from "components/copy";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProjectPage = ({ items }: { items: ProjectProps[] }) => {
  const {
    ProjectsWrapper,
    Left,
    DesktopContent,
    DesktopContentSection,
    H1,
    Right,
    DesktopPhotos,
    DesktopPhoto,
    Image,
  } = styles;

  useEffect(() => {
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
          markers: true,
        });

        details.forEach((detail, index) => {
          let headline = detail.querySelector("h1");

          let animation = gsap.timeline().to(allPhotos[index], {
            y: 0,
          });

          ScrollTrigger.create({
            trigger: headline,
            start: "top 80%",
            end: "top 50%",
            animation: animation,
            scrub: true,
            markers: true,
          });
        });
      });
    }

    return () => {
      // optional
      // custom cleanup code here (runs when it STOPS matching)
      console.log("mobile");
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [items]);

  return (
    <ProjectsWrapper className="gallery">
      <Left>
        <DesktopContent>
          {items.map((item, idx) => {
            return (
              <DesktopContentSection className="desktop-content-section">
                <H1>{item.title}</H1>
                <Copy copy={item.description.json} />
              </DesktopContentSection>
            );
          })}
        </DesktopContent>
      </Left>
      <Right className="right">
        {/* The comments below the component go here for mobile view */}
        <DesktopPhotos>
          {items.map((item, idx) => {
            const url =
              item.galleryCollection && item.galleryCollection.items.length > 0
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
  );
};

export default ProjectPage;
