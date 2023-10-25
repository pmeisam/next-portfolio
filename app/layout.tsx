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
  description: "",
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
