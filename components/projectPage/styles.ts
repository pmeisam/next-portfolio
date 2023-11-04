import styled from "styled-components";
import { colors } from "theme/colors";

export const Spacer = styled.div`
  width: 100%;
  height: 50vh;
  background: #ddd;
  display: flex;
`;

export const Title = styled.h1`
  position: relative;
  z-index: 1;
  color: ${colors.premier.darkerPurple};
  font-size: 10rem;
  font-weight: 800;
  /* display: inline; */
`;

export const Hr = styled.div``;

export const ProjectsWrapper = styled.div`
  display: flex;
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
  color: ${colors.premier.darkPurple};
  font-size: clamp(2em, 4vw, 6em);
`;

export const DesktopPhotos = styled.div`
  width: 500px;
  height: 500px;
  margin: 0 auto;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.1);
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
  background: linear-gradient(
    0deg,
    rgba(72, 249, 132, 1) 0%,
    rgba(151, 214, 172, 1) 50%,
    rgba(72, 249, 132, 1) 100%
  );
`;

export const Image = styled.img`
  width: 80%;
  max-height: 80%;
  /* height: 70%; */
`;

export const MobileContentWrapper = styled.div`
  display: none;
  width: 80vw;
`;

export const MobileContent = styled.div``;

export const MobilePhoto = styled.div`
  width: 80vw;
  height: 80vw;
  margin-top: 5em;
  border-radius: 6vw;
`;
