import React from "react";
import styled from "styled-components";

import HomeComponent from "components/home";
import IntroPage from "components/Pages/IntroPage";

const HtmlWrapper = styled.div`
  min-width: 100vw;
`;

const Page = styled.div`
  border: 1px solid white;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
`;

const AppHtml = ({ homeData }) => {
  return (
    <HtmlWrapper>
      <Page>{/* <HomeComponent data={homeData} /> */}</Page>
      <Page></Page>
      <Page>
        <h1>Projects</h1>
        <h1>Academy Museum</h1>
      </Page>
      <Page>
        <h1>Projects</h1>
        <h1>IFrame</h1>
      </Page>
      <Page>
        <h1>Projects</h1>
        <h1>Nominee Portals</h1>
      </Page>
      <Page>
        <h1>Projects</h1>
        <h1>Arcadia Automotive</h1>
      </Page>
      <Page>
        <h1>Projects</h1>
        <h1>OPS</h1>
      </Page>
      <Page>
        <h1>Works</h1>
        <h1>Academy</h1>
      </Page>
      <Page>
        <h1>Works</h1>
        <h1>Lightstorm Entertainment</h1>
      </Page>
      <Page>
        <h1>Contact Me</h1>
      </Page>
    </HtmlWrapper>
  );
};

export default AppHtml;
