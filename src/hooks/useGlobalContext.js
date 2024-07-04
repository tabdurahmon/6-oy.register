import { useContext } from "react";
import GlobalContextProvider, { GlobalContex } from "../context/GlobalContext";

export const useGlobalContext = () => {
  const contex = useContext(GlobalContex);
  if (!contex) {
    throw new Error(
      "useGlobalContext() must be in the GlobalContextProvider()"
    );
  }
  return contex;
};
