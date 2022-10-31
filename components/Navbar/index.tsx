import { FC, useContext } from "react";
import styles from "./styles.module.scss";
import { Themes, Environment } from '@/constants'
import { ThemeContext } from "@/stores/theme"
import { UserAgentContext } from "@/stores/userAgent"

export interface INavBarProps {}

export const NavBar: FC<INavBarProps> = ({}) => {
  const { setTheme } = useContext(ThemeContext)
  const { userAgent } = useContext(UserAgentContext)

  return (
    <div className={styles.navBar}>
      <a href="/">
        <div className={styles.logoIcon}></div>
      </a>
      <div className={styles.themeArea}>
        {userAgent === Environment.pc && (
          <span className={styles.text}>当前为PC端</span>
        )}
        {userAgent === Environment.ipad && (
          <span className={styles.text}>当前为Pad端</span>
        )}
        {userAgent === Environment.mobile && (
          <span className={styles.text}>当前为移动端</span>
        )}
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