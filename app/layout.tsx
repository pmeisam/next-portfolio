import "./globals.css";
import type { Metadata } from "next";

import Navbar from "components/navbar";
import { GlobalProvider } from "context/global/globalProvider";
import ReduxProvider from "redux/Provider";

export const metadata: Metadata = {
  title: "Meisam Poorzand",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>
          <ReduxProvider>
            <Navbar />
            {children}
          </ReduxProvider>
        </GlobalProvider>
      </body>
    </html>
  );
}
