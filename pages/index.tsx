import type { NextPage } from "next";
import styles from "./index.module.scss";
import cName from 'classnames';
import { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../stores/theme';

interface IProps {
  title: string;
  description: string;
  list: {
    label: string;
    info: string;
    link: string;
  }[];
}

const Home: NextPage<IProps> = ({ title, description, list }) => {
  const mainRef = useRef<HTMLDivElement>(null)
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    mainRef.current?.classList.remove(styles.withAnimation)
    window.requestAnimationFrame(() => {
      mainRef.current?.classList.add(styles.withAnimation);
    });
  }, [theme])

  return (
    <div className={styles.container}>
      <main className={cName([styles.main, styles.withAnimation])} ref={mainRef}>
        <h1 className={styles.title}>{title}</h1>

        <p className={styles.description}>{description}</p>

        <div className={styles.grid}>
          {list?.map((item, index) => {
            return (
              <div
                key={index}
                className={styles.card}
              >
                <h2>{item.label} &rarr;</h2>
                <p>{item.info}</p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

Home.getInitialProps = (context) => {
  return {
    title: "Hello NextJS!",
    description: "A Demo for NextJS, deployed by pm2",
    list: [
      {
        label: "主题化",
        info: "Thematization",
        link: "/article/1",
      },
      {
        label: "响应式",
        info: "Responsive",
        link: "/article/2",
      },
      {
        label: "帧动画",
        info: "Frame animation",
        link: "/article/3",
      },
      {
        label: "国际化(实现中)",
        info: "Internationalization",
        link: "/article/4",
      },
      {
        label: "文章5",
        info: "A test for article5",
        link: "/article/5",
      },
      {
        label: "文章6",
        info: "A test for article6",
        link: "/article/6",
      },
    ],
  };
};

export default Home;
