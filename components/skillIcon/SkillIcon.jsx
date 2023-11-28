import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillIcon = ({ name, icon }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <SkillIconWrapper>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">{icon}</div>
          <div className="flip-card-back">
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    </SkillIconWrapper>
  );
};

export default SkillIcon;

let SkillIconWrapper = styled.div`
  // z-index: 10;
  h3 {
    font-size: 12px;
  }
  .flip-card {
    background-color: transparent;
    width: 100px;
    height: 100px;
    perspective: 1000px;
    // margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flip-card-inner {
    position: relative;
    width: 60%;
    height: 60%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    font-size: 50px;
    // background-color: rgb(39, 50, 56);
  }

  .flip-card-back {
    background-image: linear-gradient(
      to bottom,
      rgb(117, 101, 236),
      rgb(122, 42, 196)
    ) !important;
    color: white;
    transform: rotateY(180deg);
  }

  @media screen and (max-width: 900px) {
    .flip-card {
      margin-top: 50px;
    }
    .skills_parent {
      max-height: 80vh;
      margin-top: 8vh;
      margin-left: auto;
      margin-right: auto;
      width: 95vw;
    }

    .flip-card-front {
      font-size: 4vh;
    }
    .flip-card-back h3 {
      font-size: 11px;
    }
    .flip-card-back h4 {
      font-size: 11px;
    }
  }

  @media screen and (max-width: 600px) {
    .flip-card {
      margin: auto auto;
      width: 50px;
      height: 50px;
    }
    .skills_parent {
      max-height: 80vh;
      margin: 10vh auto;
      width: 95vw;
    }

    .flip-card-front {
      font-size: 3vh;
    }

    .flip-card-back h3 {
      font-size: 11px;
    }
    .flip-card-back h4 {
      font-size: 11px;
    }
  }
`;
