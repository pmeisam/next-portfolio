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
  useEffect(() => {
    if (!!items) {
      const photos = gsap.utils.toArray(".desktop-photo:not(:first-child)");
      const details = gsap.utils.toArray(
        ".desktop-content-section:not(:first-child)"
      );
      const allPhotos = gsap.utils.toArray(".desktop-photo");
      let mm = gsap.matchMedia();

      mm.add("(min-width: 600px)", () => {
        // this setup code only runs when viewport is at least 600px wide
        console.log("desktop");

        ScrollTrigger.create({
          trigger: ".gallery",
          start: "top top",
          end: "bottom bottom",
          pin: ".right",
        });

        //create scrolltrigger for each details section
        //trigger photo animation when headline of each details section
        //reaches 80% of window height
        console.log("photos", photos);
        console.log("allPhotos", allPhotos);
        details.forEach((detail, index) => {
          let headline = detail.querySelector("h1");
          console.log("headLine", headline);
          let animation = gsap
            .timeline()
            .to(photos[index], { yPercent: 0 })
            .set(allPhotos[index], { autoAlpha: 0 });
          ScrollTrigger.create({
            trigger: headline,
            start: "top 80%",
            end: "top 50%",
            animation: animation,
            scrub: true,
            markers: false,
          });
        });
      });
    }

    return () => {
      // optional
      // custom cleanup code here (runs when it STOPS matching)
      console.log("mobile");
    };
  }, []);

  return (
    <ProjectsWrapper>
      <div className="spacer"></div>
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
                <div className="desktop-photo">{url && <img src={url} />}</div>
              );
            })}
          </div>
        </div>
      </div>
    </ProjectsWrapper>
  );
};

export default ProjectPage;

{
  /* <div class="mobileContent">
            <div class="mobilePhoto red"></div>
            <h1>Red</h1>
            <p>
              Red is a color often associated with strong emotions such as
              passion, love, and anger. It's a bold and attention-grabbing color
              that can evoke feelings of excitement, warmth, and energy.
            </p>

            <div class="mobilePhoto green"></div>
            <h1>Green</h1>
            <p>
              Green is a color that is often associated with nature, growth, and
              harmony. It is a calming and relaxing color that can evoke
              feelings of balance, stability, and freshness. In color
              psychology, green is said to represent balance and stability,
              making it a popular choice for branding and marketing in the
              health and wellness industry.{" "}
            </p>

            <div class="mobilePhoto pink"></div>
            <h1>Pink</h1>
            <p>
              Pink is a color that is often associated with femininity, romance,
              and sweetness. It is a softer and more delicate shade of red that
              can evoke feelings of warmth, love, and nurturing. In the world of
              branding and marketing, pink is often used to target a female
              audience or to promote products that are associated with beauty,
              love, or romance.
            </p>

            <div class="mobilePhoto blue"></div>
            <h1>Blue</h1>
            <p>
              Blue is a color that is often associated with calmness, trust, and
              reliability. It is a peaceful and serene color that can evoke
              feelings of stability, security, and professionalism. In color
              psychology, blue is said to represent loyalty and trust, making it
              a popular choice for branding and marketing in the finance and
              technology industries.
            </p>
          </div> */
}
