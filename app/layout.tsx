import "./globals.css";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("components/navbar"), {
  ssr: false,
  loading: () => <p></p>,
});

import ReduxProvider from "redux/Provider";

import { fetchGlobal } from "lib/api/contentful";

export const metadata: Metadata = {
  title: "Meisam Poorzand",
  description:
    "Full-stack software engineer with a background in computer science. I am a motivated self-starter with a persistent drive to succeed. I am currently seeking new opportunities to learn and develop new skills in the field. My passion lies in utilizing development as a means of making positive social change by teaching others the value and potential of technology. With a focus on building intuitive, user-friendly applications, my ultimate goal is to improve the overall user experience.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await fetchGlobal();
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navbar data={data?.navbar} />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
