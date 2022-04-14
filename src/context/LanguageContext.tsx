import { createContext, FC, ReactNode, useReducer } from "react";
import es from "../utils/languages/es.json";
import en from "../utils/languages/en.json";

enum LangActionType {
  SET_LANGUAGE = "SET_LANGUAGE",
}

interface LangState {
  language: string;
}

interface LanguageProviderProps {
  children: ReactNode;
}

interface SetLanguageAction {
  type: typeof LangActionType.SET_LANGUAGE;
  payload: string;
}

interface ContextProps {
  state: LangState;
  dispatch: {
    setLanguage: (lang: string) => void;
    getTexts: (key: string) => { [key: string]: string };
  };
}

const langReducer = (
  state: LangState,
  action: SetLanguageAction
): LangState => {
  switch (action.type) {
    case LangActionType.SET_LANGUAGE:
      return {
        language: action.payload,
      };
    default:
      return state;
  }
};

const localStorageLang = localStorage.getItem("language");
const initialState = {
  language: localStorageLang ? localStorageLang : "ES",
};

export const LangContext = createContext({} as ContextProps);

const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(langReducer, initialState);

  const setLanguage = (lang: string) => {
    localStorage.setItem("language", lang);
    dispatch({ type: LangActionType.SET_LANGUAGE, payload: lang });
  };

  const getTexts = (key: string): { [key: string]: string } => {
    const { language } = state;
    let langData: { [key: string]: { [key: string]: string } } = {};

    if (language === "ES") {
      langData = es;
    } else if (language === "EN") {
      langData = en;
    }

    return langData[key];
  };
  return (
    <LangContext.Provider
      value={{ state, dispatch: { setLanguage, getTexts } }}
    >
      {children}
    </LangContext.Provider>
  );
};

export default LanguageProvider;
