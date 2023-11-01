"use client";
import React, { useEffect } from "react";

import Copy from "components/copy";
import { ProjectProps } from "types";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { ProjectsWrapper } from "./styles";
gsap.registerPlugin(ScrollTrigger);

type Props = {
  items: ProjectProps[];
};

const ProjectPage = ({ items }: Props) => {
  console.log("items", items);
  useEffect(() => {
    if (!!items) {
      const photos = gsap.utils.toArray(".desktop-photo:not(:first-child)");
      const details = gsap.utils.toArray(".desktop-content-section");
      const allPhotos = gsap.utils.toArray(".desktop-photo");
      let mm = gsap.matchMedia();

      mm.add("(min-width: 600px)", () => {
        // this setup code only runs when viewport is at least 600px wide
        console.log("desktop");
        gsap.set(photos, { yPercent: 101, autoAlpha: 0 }); // Push photos off-screen and make them invisible

        ScrollTrigger.create({
          trigger: ".gallery",
          start: "top top",
          end: "bottom bottom",
          pin: ".right",
          markers: true,
        });

        //create scrolltrigger for each details section
        //trigger photo animation when headline of each details section
        //reaches 80% of window height
        details.forEach((detail, index) => {
          let headline = detail.querySelector("h1");
          let animation = gsap
            .timeline()
            .to(photos[index], { yPercent: 0, duration: 1 }) // animate the photo
            .set(allPhotos[index], { autoAlpha: 1, duration: 3 });

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
    <ProjectsWrapper>
      <div className="gallery">
        <div className="left">
          <div className="desktop-content">
            {items.map((item, idx) => {
              return (
                <div className="desktop-content-section">
                  <h1>{item.title}</h1>
                  <Copy copy={item.description.json} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="right">
          {/* The comments below the component go here for mobile view */}
          <div className="desktop-photos">
            {items.map((item, idx) => {
              const url =
                item.galleryCollection &&
                item.galleryCollection.items.length > 0
                  ? item.galleryCollection.items[0].url
                  : null;
              return (
                <div key={item.title + "-" + idx} className="desktop-photo">
                  {url && <img src={url} />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ProjectsWrapper>
  );
};

export default ProjectPage;
