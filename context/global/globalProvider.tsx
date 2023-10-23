"use client";
import { ReactNode, useState, useEffect } from "react";

import { fetchGlobal } from "lib/api/contentful";
import { ContextType } from "types";
import GlobalContext from "./globalContext";
import Loading from "components/loading";

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [loadingStatus, setLoadingStatus] = useState<
    "pending" | "rejected" | "success"
  >("pending");

  const [data, setData] = useState<ContextType | null>(null);
  const [showLoading, setShowLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData: ContextType | null = await fetchGlobal();
        setData(fetchedData);
        setLoadingStatus("success");
      } catch (error) {
        console.error("Error fetching global data:", error);
        setLoadingStatus("rejected");
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    // After 4 seconds, set showLoading to false
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (showLoading || loadingStatus === "pending") {
    return <Loading />;
  }

  if (loadingStatus === "rejected") {
    // Handle the case where data fetching failed
    return <h1>404</h1>;
  }

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};
