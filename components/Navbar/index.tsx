import { FC, useCallback, useContext } from "react";
import styles from "./styles.module.scss";
import { Themes, Language } from '@/constants'
import { ThemeContext } from "@/stores/theme"
import { UserAgentContext } from "@/stores/userAgent"
import { LanguageContext } from '@/stores/language'

export interface INavBarProps {}

export const NavBar: FC<INavBarProps> = ({}) => {
  const { setTheme } = useContext(ThemeContext)
  const { userAgent } = useContext(UserAgentContext)
  const { language, setLanguage } = useContext(LanguageContext)

  const handleLangChange = useCallback(() => {
    language === 'zh' ? setLanguage(Language.en) : setLanguage(Language.zh)
  }, [language])

  return (
    <div className={styles.navBar}>
      <a href="/">
        <div className={styles.logoIcon}></div>
      </a>
      <div className={styles.themeArea}>
        <span className={styles.text}>{userAgent}</span>
        <button className={styles.lang} onClick={() => handleLangChange()}>
          {
            language === 'zh' ? "English" : '中文'
          }
        </button>
        <div
          className={styles.themeIcon}
          onClick={(): void => {
            if (localStorage.getItem("theme") === Themes.light) {
              setTheme(Themes.dark);
            } else {
              setTheme(Themes.light);
            }
          }}
        ></div>
      </div>
    </div>
  );
};