import { FC, useContext } from "react";
import styles from "./styles.module.scss";
import { Themes } from '@/constants'
import { ThemeContext } from "@/stores/theme"

export interface INavBarProps {}

export const NavBar: FC<INavBarProps> = ({}) => {
  const { setTheme } = useContext(ThemeContext)

  return (
    <div className={styles.navBar}>
      <a href="/">
        <div className={styles.logoIcon}></div>
      </a>
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
  );
};