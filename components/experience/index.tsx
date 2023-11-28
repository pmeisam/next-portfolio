"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkillIconAndName from "components/skillIcon/SkillIconAndName";

import {
  ExperienceContainer,
  ExperienceCard,
  Title,
  Location,
  UnorderedList,
  Image,
  StyledCopy,
  SkillsContainer,
  AmpasLinksContainer,
  AvtrLinkContainer,
  ProjectsLinkContainer,
  LinkWrapper,
} from "./styles";
import Overlay from "components/overlay";
import { ExperienceProps } from "types/index";
import Link from "next/link";
import { colors } from "theme/colors";
import { icons } from "constants/index";
gsap.registerPlugin(ScrollTrigger);

type Props = {
  items: ExperienceProps[];
};

type ExperienceModifiedProps = ExperienceProps & {
  modifiedSkills?: any | null;
  modifiedLinks?: any | null;
};

const Experience = ({ items }: Props) => {
  const tl = useRef<GSAPTimeline | null>(null);
  const [itemsModified, setItemsModified] = useState<ExperienceModifiedProps[]>(
    []
  );

  const modifyItems = (items: ExperienceProps[]): ExperienceModifiedProps[] => {
    return items.map((item) => {
      let newSkills, newLinks;

      switch (item.sys.id) {
        case "4AIai8bKV1926sKlT7MXEb":
          newSkills = setAvtrSkills();
          newLinks = setAvtrLinks();
          break;
        case "3JDH75z5joOV8FTtF2O1rh":
          newSkills = setAmpasSkills();
          newLinks = setAmpasLinks();
          break;
        case "freelancer":
          newSkills = setFreelancerSkills();
          newLinks = setFreelancerLinks();
          break;
        default:
          newSkills = null;
          newLinks = null;
      }

      return { ...item, modifiedSkills: newSkills, modifiedLinks: newLinks };
    });
  };

  useEffect(() => {
    setItemsModified(modifyItems(items));
  }, [items]);

  // helper functions
  const setAmpasSkills = () => {
    return (
      <SkillsContainer>
        <SkillIconAndName name={"next.js"} icon={icons.nextjs} />
        <SkillIconAndName name={"Node.js"} icon={icons.nodejs} />
        <SkillIconAndName name={"Express"} icon={icons.express} />
        <SkillIconAndName name={"React.js"} icon={icons.reactjs} />
        <SkillIconAndName name={"Redux"} icon={icons.redux} />
        <SkillIconAndName name={"JavaScript"} icon={icons.javaScript} />
        <SkillIconAndName name={"TypeScript"} icon={icons.typeScript} />
        <SkillIconAndName name={"jira"} icon={icons.jira} />
        <SkillIconAndName name={"GraphQL"} icon={icons.graphQl} />
        <SkillIconAndName name={"Contentful"} icon={icons.contentful} />
        <SkillIconAndName name={"AWS"} icon={icons.aws} />
        <SkillIconAndName name={"Vim"} icon={icons.vim} />
        <SkillIconAndName name={"HTML"} icon={icons.html} />
        <SkillIconAndName name={"CSS"} icon={icons.css} />
        <SkillIconAndName name={"SASS"} icon={icons.sass} />
        <SkillIconAndName name={"Bootstrap"} icon={icons.bootstrap} />
        <SkillIconAndName name={"Figma"} icon={icons.figma} />
        <SkillIconAndName name={"GitHub"} icon={icons.gitHub} />
        <SkillIconAndName name={"Git"} icon={icons.git} />
      </SkillsContainer>
    );
  };

  const setAmpasLinks = () => {
    return (
      <>
        <LinkWrapper>
          {icons.link}
          <AmpasLinksContainer
            href="https://aframe.oscars.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            A.FRAME
          </AmpasLinksContainer>
        </LinkWrapper>
        <LinkWrapper>
          {icons.link}
          <AmpasLinksContainer
            href="https://www.academymuseum.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACADEMY MUSEUM
          </AmpasLinksContainer>
        </LinkWrapper>
      </>
    );
  };

  const setAvtrSkills = () => {
    return (
      <SkillsContainer>
        <SkillIconAndName name={"Java"} icon={icons.java} />
        <SkillIconAndName name={"Spring"} icon={icons.spring} />
        <SkillIconAndName name={"Python"} icon={icons.python} />
        <SkillIconAndName name={"PostgreSQL"} icon={icons.postgresSql} />
        <SkillIconAndName name={"MySQL"} icon={icons.mySql} />
        <SkillIconAndName name={"JavaScript"} icon={icons.javaScript} />
        <SkillIconAndName name={"GitLab"} icon={icons.gitlab} />
        <SkillIconAndName name={"Git"} icon={icons.git} />
        <SkillIconAndName name={"Jenkins"} icon={icons.jenkins} />
        <SkillIconAndName name={"nginx"} icon={icons.nginx} />
        <SkillIconAndName name={"AWS"} icon={icons.aws} />
        <SkillIconAndName name={"Vim"} icon={icons.vim} />
        <SkillIconAndName name={"ElasticSearch"} icon={icons.elasticSearch} />
      </SkillsContainer>
    );
  };

  const setAvtrLinks = () => {
    return (
      <AvtrLinkContainer
        href="https://www.imdb.com/name/nm14548800/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {icons.imdb}
      </AvtrLinkContainer>
    );
  };

  const setFreelancerLinks = () => {
    return (
      <ProjectsLinkContainer>
        <Link href="/projects" className="project-button">
          <i className="fas fa-layer-group"></i>&nbsp;Projects
        </Link>
      </ProjectsLinkContainer>
    );
  };

  const setFreelancerSkills = () => {
    return (
      <SkillsContainer>
        <SkillIconAndName
          name={"React.js"}
          icon={<i className="devicon-react-plain-wordmark colored"></i>}
        />
        <SkillIconAndName
          name={"Node.js"}
          icon={<i className="devicon-nodejs-plain colored"></i>}
        />
        <SkillIconAndName
          name={"Express"}
          icon={<i className="devicon-express-original"></i>}
        />
        <SkillIconAndName
          name={"Python"}
          icon={<i className="devicon-python-plain-wordmark colored"></i>}
        />
        <SkillIconAndName
          name={"Django"}
          icon={<i className="devicon-django-plain-wordmark"></i>}
        />
        <SkillIconAndName
          name={"MongoDB"}
          icon={<i className="devicon-mongodb-plain colored"></i>}
        />
        <SkillIconAndName
          name={"PostgreSQL"}
          icon={<i className="devicon-postgresql-plain-wordmark colored"></i>}
        />
        <SkillIconAndName
          name={"MySQL"}
          icon={<i className="devicon-mysql-plain colored"></i>}
        />
        <SkillIconAndName
          name={"JavaScript"}
          icon={<i className="devicon-javascript-plain colored"></i>}
        />
        <SkillIconAndName
          name={"TypeScript"}
          icon={<i className="devicon-typescript-plain colored"></i>}
        />
        <SkillIconAndName
          name={"jQuery"}
          icon={<i className="devicon-jquery-plain-wordmark colored"></i>}
        />
        <SkillIconAndName
          name={"HTML"}
          icon={<i className="devicon-html5-plain-wordmark colored"></i>}
        />
        <SkillIconAndName
          name={"CSS"}
          icon={<i className="devicon-css3-plain-wordmark colored"></i>}
        />
        <SkillIconAndName
          name={"SASS"}
          icon={<i className="devicon-sass-original colored"></i>}
        />
        <SkillIconAndName
          name={"wordpress"}
          icon={<i className="devicon-wordpress-plain-wordmark"></i>}
        />
        <SkillIconAndName
          name={"Firebase"}
          icon={<i className="devicon-firebase-plain colored"></i>}
        />
        <SkillIconAndName
          name={"AWS"}
          icon={<i className="devicon-amazonwebservices-plain colored"></i>}
        />
        <SkillIconAndName
          name={"Bootstrap"}
          icon={<i className="devicon-bootstrap-plain"></i>}
        />
        <SkillIconAndName
          name={"Material UI"}
          icon={<i className="devicon-materialui-plain"></i>}
        />
        <SkillIconAndName
          name={"Figma"}
          icon={<i className="devicon-figma-plain colored"></i>}
        />
        <SkillIconAndName
          name={"Redux"}
          icon={<i className="devicon-redux-original colored"></i>}
        />
        <SkillIconAndName
          name={"GitHub"}
          icon={<i className="devicon-github-plain-wordmark"></i>}
        />
        <SkillIconAndName
          name={"Git"}
          icon={<i className="devicon-git-plain colored"></i>}
        />
        <SkillIconAndName
          name={"Heroku"}
          icon={<i className="devicon-heroku-plain-wordmark colored"></i>}
        />
        <SkillIconAndName
          name={"nginx"}
          icon={<i className="devicon-nginx-plain-wordmark colored"></i>}
        />
      </SkillsContainer>
    );
  };

  return (
    <ExperienceContainer>
      {/* <Overlay /> */}
      {items &&
        itemsModified.map((item: ExperienceModifiedProps, idx: number) => {
          const { title, company, location, description, logo, sys } = item;

          return (
            <ExperienceCard className={`card-${idx}`} key={idx}>
              <div style={{ width: "100%" }}>
                <Title className="work-title">
                  {title} at {company}
                </Title>
                <Location className="work-title" id="location">
                  {location}&nbsp;{}
                </Location>
                <UnorderedList>
                  <StyledCopy copy={description.json} />
                </UnorderedList>
                {item.modifiedSkills}
                {item.modifiedLinks}
              </div>
              {logo && (
                <picture>
                  <Image alt={logo.fileName} src={logo.url} />
                </picture>
              )}
              {/* {item.modifiedSkills}
              {item.modifiedLinks} */}
            </ExperienceCard>
          );
        })}
    </ExperienceContainer>
  );
};

export default Experience;
