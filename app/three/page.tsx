import React, { Suspense } from "react";
import Experience from "components/ThreeComponents/Experience";
import { GlobalProvider } from "context/global/globalProvider";
import { fetchGlobal } from "lib/api/contentful";
import client from "lib/apolloClient";
import { GET_HOME } from "graphql/queries/getHome";

const three = async () => {
  const global = await fetchGlobal();
  const homeData = await fetchHomeData();
  return (
    <Suspense fallback={null}>
      <GlobalProvider data={global}>
        <Experience homeData={homeData} />
      </GlobalProvider>
    </Suspense>
  );
};

const fetchHomeData = async () => {
  const { data } = await client.query({ query: GET_HOME });
  return data.portfolio;
};

export default three;
