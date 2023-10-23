import { createContext } from "react";
import { ContextType } from "types";

const defaultContext: ContextType = {
  navbar: {},
};

const GlobalContext = createContext<ContextType | null>(defaultContext);

export default GlobalContext;
