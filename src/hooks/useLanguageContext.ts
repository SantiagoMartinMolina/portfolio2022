import { useContext } from "react";
import { LangContext } from "../context/LanguageContext";

const useLanguageContext = () => {
  const value = useContext(LangContext);
  if (!value) {
    throw Error("You should call useLanguageContext inside a Provider");
  }
  return value;
};

export default useLanguageContext;
