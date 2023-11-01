import styled from "styled-components";
import { colors } from "theme/colors";

export const Spacer = styled.div`
  width: 100%;
  height: 50vh;
  background: #ddd;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  h1 {
    font-size: clamp(2em, 4vw, 6em);
  }
  p {
    font-size: clamp(1.4em, 2.5vw, 3.5em);
    line-height: 1.4;
  }
`;

export const Left = styled.div`
  width: 50%;
`;

export const Right = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DesktopContent = styled.div`
  margin: auto;
  width: 80%;
`;

export const DesktopContentSection = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const H1 = styled.h1`
  color: ${colors.white};
`;

export const DesktopPhotos = styled.div`
  width: 40vw;
  height: 30vh;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
`;

export const DesktopPhoto = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 80%;
  height: 70%;
`;

export const Red = styled.div`
  background: crimson;
`;

export const Green = styled.div`
  background: MediumSeaGreen;
`;

export const Blue = styled.div`
  background: dodgerblue;
`;

export const Pink = styled.div`
  background: deepPink;
`;

export const MobileContent = styled.div`
  display: none;
  width: 80vw;
`;

export const MobilePhoto = styled.div`
  width: 80vw;
  height: 80vw;
  margin-top: 5em;
  border-radius: 6vw;
`;
