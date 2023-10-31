import { Suspense } from "react";
import dynamic from "next/dynamic";

import client from "lib/apolloClient";
import { fetchGlobal } from "lib/api/contentful";
import { Document } from "@contentful/rich-text-types";

import { GET_EXPERIENCES } from "graphql/queries/getExperiences";
import { GlobalProvider } from "context/global/globalProvider";
import Loading from "app/loading";
import Work from "components/work";
import { ExperienceProps } from "types/index";

const Experience = async () => {
  const items = await getWorkData();
  const global = await fetchGlobal();

  return (
    <Suspense fallback={<Loading />}>
      <GlobalProvider data={global}>
        <Work items={items} />
      </GlobalProvider>
    </Suspense>
  );
};

const getWorkData = async (): Promise<ExperienceProps[]> => {
  const { data } = await client.query({ query: GET_EXPERIENCES });
  return data.workCollection.items;
};

export default Experience;
