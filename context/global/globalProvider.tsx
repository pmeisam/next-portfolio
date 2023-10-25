"use client";
import { ReactNode } from "react";

import { ContextType } from "types";
import GlobalContext from "./globalContext";

export const GlobalProvider = ({
  children,
  data,
}: {
  children: ReactNode;
  data: ContextType | null;
}) => {
  if (!data) {
    // Handle the case where data fetching failed
    return <h1>404</h1>;
  }

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};
