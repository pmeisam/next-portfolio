import { Suspense } from "react";

import client from "lib/apolloClient";
import { fetchGlobal } from "lib/api/contentful";

import { GET_EXPERIENCES } from "graphql/queries/getExperiences";
import { GlobalProvider } from "context/global/globalProvider";
import Loading from "app/loading";
import ExperienceComponent from "components/experience";
import { ExperienceProps } from "types/index";
import Head from "next/head";

const Experience = async () => {
  const items = await getWorkData();
  const global = await fetchGlobal();

  return (
    <Suspense fallback={<Loading />}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </Head>
      <GlobalProvider data={global}>
        <ExperienceComponent items={items} />
      </GlobalProvider>
    </Suspense>
  );
};

const getWorkData = async (): Promise<ExperienceProps[]> => {
  const { data } = await client.query({
    query: GET_EXPERIENCES,
    fetchPolicy: "network-only",
  });
  return data.workCollection.items;
};

export default Experience;
