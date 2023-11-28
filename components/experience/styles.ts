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
  color: ${colors.premier.darkPurple};

  ${media.small`
    font-size: 26px;
  `}
`;

const Location = styled.div`
  background-color: ${colors.premier.darkPurple};
  color: ${colors.premier.green};
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
    color: ${colors.darkBlue};
    font-size: 14px;
    ${media.small`
        width: 80%;
        font-size: 16px;
        line-height: 18px;
    `}
  }
`;

const StyledCopy = styled(Copy)`
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 300;
  color: ${colors.ashGray} !important;
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

const ExperiencesContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  @media screen and (max-width: 700px) {
    width: 90%;
    margin: 0 auto;
    margin-top: 90px;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  ${media.medium`
    width: 100%;
    flex-wrap: nowrap;
  `}
`;

const AmpasLinksContainer = styled.a`
  margin-left: 20px;
  border-bottom: 3px solid ${colors.gold};
  color: ${colors.night};
  font-size: 16px;
  font-weight: 800;

  & svg {
    width: 50px;
    display: inline;
    margin-bottom: 40px;
  }
  &:hover {
    /* box-shadow: 0px 4px 26px 4px ${colors.white}; */
    border-bottom: 4px solid ${colors.gold};
    font-weight: 900;
    & svg {
      fill: ${colors.night};
    }
  }
  ${media.medium`
    font-size: 16px;
  `}
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const AvtrLinkContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f5c518;
  color: #000;
  background-color: #f5c518;
  border-radius: 5px;
  width: 120px;
  height: 48px;
  margin-top: 20px;

  :hover {
    box-shadow: 0px 0px 26px 4px #f5c518;
  }

  .imdb-icon {
    font-size: 15px;
  }

  .imdb-logo {
    width: 60px;
  }

  @media screen and (max-width: 700px) {
    width: 120px;
    height: 40px;
    font-size: 13px;
  }
`;

const ProjectsLinkContainer = styled.div`
  .project-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(
      to bottom,
      rgb(117, 101, 236),
      rgb(122, 42, 196)
    ) !important;
    width: 120px;
    height: 48px;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: 300;
    margin: 20px 0 30px 0;
  }
  .project-button:hover {
    box-shadow: 0px 0px 26px 4px rgb(122, 42, 196);
  }

  @media screen and (max-width: 700px) {
    .project-button {
      width: 120px;
      height: 40px;
      font-size: 13px;
    }
  }
`;

export {
  ExperienceContainer,
  ExperienceCard,
  Title,
  Location,
  UnorderedList,
  StyledCopy,
  Image,
  SkillsContainer,
  ExperiencesContainer,
  LinkWrapper,
  AmpasLinksContainer,
  AvtrLinkContainer,
  ProjectsLinkContainer,
};
