"use client";
import { ReactNode, useState, useEffect } from "react";

import { fetchGlobal } from "lib/api/contentful";
import GlobalContext, { ContextType } from "./globalContext";

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [loadingStatus, setLoadingStatus] = useState<
    "pending" | "rejected" | "success"
  >("pending");

  const [data, setData] = useState<object | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data: ContextType = await fetchGlobal();
        setData(data);
        setLoadingStatus("success");
      } catch (error) {
        console.error("Error fetching global data:", error);
        setLoadingStatus("rejected");
      }
    }

    fetchData();
  }, []);

  if (loadingStatus === "pending") {
    return <h1>Loading...</h1>;
  }

  if (loadingStatus === "rejected") {
    // Handle the case where data fetching failed
    return <h1>404</h1>;
  }

  return (
    <GlobalContext.Provider value={{ data }}>{children}</GlobalContext.Provider>
  );
};
