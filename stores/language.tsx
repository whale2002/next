import { createContext, useState, useEffect } from 'react';
import { Language } from '../constants';

interface ILanguageContextProps {
  language: Language
  setLanguage: (language: Language) => void
}

interface IProps {
  children: JSX.Element
}

export const LanguageContext = createContext<ILanguageContextProps>({} as ILanguageContextProps)

export const LanguageContextProvider = ({children}: IProps): JSX.Element => {
  const [language, setLanguage] = useState<Language>(Language.zh)

  useEffect(() => {
    const checkLanguage = (): void => {
      const item =
        (localStorage.getItem("language") as Language) || Language.zh;
      setLanguage(item);
    };
    checkLanguage();
    window.addEventListener("storage", checkLanguage);

    return (): void => {
      window.removeEventListener("storage", checkLanguage);
    };
  }, [])

  return (
    <LanguageContext.Provider value={{language, setLanguage: (currentLanguage) => {
      setLanguage(currentLanguage)
      localStorage.setItem('language', currentLanguage)
    }}}>
      {children}
    </LanguageContext.Provider>
  )
}