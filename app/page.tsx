import { Metadata, ResolvingMetadata } from "next";
import dynamic from "next/dynamic";
import client from "lib/apolloClient";
import { fetchGlobal } from "lib/api/contentful";
import { ContextType } from "types";

import { GET_HOME } from "graphql/queries/getHome";
import { GlobalProvider } from "context/global/globalProvider";
import { Suspense } from "react";
import Loading from "./loading";

const HomeComponent = dynamic(() => import("components/home"), {
  ssr: true,
  // loading: () => <p>Loading...</p>,
});

// import HomeComponent from 'components/home'

export const generateMetadata = async (): Promise<Metadata> => {
  const data = await getHomeData();
  console.log("data", data);

  return {
    title: "Meisam Poorzand Portfolio",
    generator: "Next.js",
    applicationName: "Portfolio",
    referrer: "origin-when-cross-origin",
    keywords: [
      "Next.js",
      "React",
      "JavaScript",
      "Developer",
      "Web Developer",
      "Java",
      "Python",
      "Node.js",
      "Next 13",
      "Meisam Poorzand",
      "Software Engineer",
    ],
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      images: [
        {
          url: "https://nextjs.org/og.png",
          width: 800,
          height: 600,
        },
        {
          url: "https://nextjs.org/og-alt.png",
          width: 1800,
          height: 1600,
          alt: "My custom alt",
        },
      ],
      type: "profile",
    },
  };
};

const Home = async () => {
  const data = await getHomeData();
  const global = await fetchGlobal();

  return (
    <Suspense fallback={<Loading />}>
      <GlobalProvider data={global}>
        <HomeComponent data={data} />
      </GlobalProvider>
    </Suspense>
  );
};

const getHomeData = async () => {
  const { data } = await client.query({ query: GET_HOME });
  return data.portfolio;
};

export default Home;
