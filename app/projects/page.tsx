import { Suspense } from "react";

import client from "lib/apolloClient";
import { fetchGlobal } from "lib/api/contentful";

import { GET_PROJECTS } from "graphql/queries/getProjects";
import { GlobalProvider } from "context/global/globalProvider";
import Loading from "app/loading";
import { ProjectProps } from "types/index";
import ProjectPage from "components/projectPage";

const Project = async () => {
  const items = await getProjectsData();
  const global = await fetchGlobal();

  return (
    <Suspense fallback={<Loading />}>
      <GlobalProvider data={global}>
        <ProjectPage items={items} />
      </GlobalProvider>
    </Suspense>
  );
};

const getProjectsData = async (): Promise<ProjectProps[]> => {
  const { data } = await client.query({
    query: GET_PROJECTS,
    fetchPolicy: "network-only",
  });
  return data.projectCollection.items;
};

export default Project;
