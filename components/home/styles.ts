import styled from "styled-components";
import { colors, media } from "theme";

import Copy from "components/copy";
import Button from "components/button";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
  justify-content: center;
  overflow: hidden;

  ${media.small`
    padding: 4rem;
`}

  ${media.medium`
        padding: 10rem;
    `}
`;

export const Space = styled.span`
  display: inline-block;
  width: 1em; /* adjust as needed */
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  ${media.small`
    justify-content: left;
  `}
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${colors.white};

  ${media.small`
    font-size: 3rem;
    `}
  ${media.medium`
    font-size: 5rem;
    `}

  position: relative;
  z-index: 1;
`;

export const CopyP = styled(Copy)`
  position: relative;
  z-index: 1;
`;

export const Btn = styled(Button)`
  margin-left: auto;
  margin-top: 1rem;
`;
