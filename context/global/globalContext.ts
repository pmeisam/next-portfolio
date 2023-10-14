import { createContext } from "react";

export interface ContextType {
  navbar: object | null;
}

const defaultContext: ContextType = {
  navbar: null,
};

const GlobalContext = createContext<ContextType>(defaultContext);

export default GlobalContext;
