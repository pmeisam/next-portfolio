import styled from "styled-components";
import Copy from "components/copy";
import { media } from "theme/media";
import { colors } from "theme/colors";

const ExperienceContainer = styled.div`
  overflow-x: hidden;
  width: 95%;
  border: 1px solid red;

  ${media.small`
    width: 85%;
  `}
  ${media.medium`
    width: 85%;
  `}
`;

const ExperienceCard = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  ${media.small`
    max-width: 100%;
    `}
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 5px;
  color: ${colors.white};

  ${media.small`
    font-size: 26px;
  `}
`;

const Location = styled.div`
  background-color: ${colors.premier.yellow};
  color: ${colors.premier.darkPurple};
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  border-radius: 1px;
  width: 330px;
  ${media.small`
    font-size: 16px;
    width: 410px;
  `}
`;

const UnorderedList = styled.ul`
  li {
    list-style-type: square;
    margin-left: 20px;
    color: rgb(138, 138, 138);
    font-size: 14px;
    ${media.small`
        font-size: 16px;
    `}
  }
`;

const StyledCopy = styled(Copy)`
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 300;
  color: ${colors.white} !important;
`;

const Image = styled.img`
  display: none;

  ${media.small`
    display: block;
    width: 120px;
    margin-left: 10px;
  `}

  ${media.medium`
        width: 200px;
    `}
`;

export {
  ExperienceContainer,
  ExperienceCard,
  Title,
  Location,
  UnorderedList,
  StyledCopy,
  Image,
};
