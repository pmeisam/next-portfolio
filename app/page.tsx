import dynamic from "next/dynamic";
import client from "lib/apolloClient";
import { fetchGlobal } from "lib/api/contentful";
import { ContextType } from "types";

import { GET_HOME } from "graphql/queries/getHome";
import { GlobalProvider } from "context/global/globalProvider";

const HomeComponent = dynamic(() => import("components/home"), {
  ssr: true,
  // loading: () => <p>Loading...</p>,
});

// import HomeComponent from 'components/home'

const Home = async () => {
  const data = await getHomeData();
  const global = await fetchGlobal();

  return (
    <GlobalProvider data={global}>
      <HomeComponent data={data} />
    </GlobalProvider>
  );
};

const getHomeData = async () => {
  const { data } = await client.query({ query: GET_HOME });
  return data.portfolio;
};

export default Home;
