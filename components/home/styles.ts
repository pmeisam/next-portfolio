import styled from "styled-components";
import { colors, media } from "theme";
import Copy from "components/copy";


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
  justify-content: center;

  ${media.small`
    padding: 8rem;
`}

  ${media.medium`
        padding: 22rem;
    `}
`;

export const Space = styled.span`
  display: inline-block;
  width: 1em; /* adjust as needed */
`;

export const TitleWrapper = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${colors.darkBlue};
  ${media.small`
    font-size: 3rem;
    `}
`;

export const CopyP = styled(Copy)`
    
`;
