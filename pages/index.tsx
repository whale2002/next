import type { NextPage } from "next";
import styles from "./index.module.scss";
import cName from 'classnames';
import { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../stores/theme';
import { LanguageContext } from '../stores/language';

interface IItemProps {
  title: string;
  description: string;
  list: {
    label: string;
    info: string;
    link?: string;
  }[];
}

interface IProps {
  zh: IItemProps,
  en: IItemProps
}

const Home: NextPage<IProps> = (content) => {
  const mainRef = useRef<HTMLDivElement>(null)
  const { theme } = useContext(ThemeContext)
  const { language } = useContext(LanguageContext)

  useEffect(() => {
    mainRef.current?.classList.remove(styles.withAnimation)
    window.requestAnimationFrame(() => {
      mainRef.current?.classList.add(styles.withAnimation);
    });
  }, [theme])

  return (
    <div className={styles.container}>
      <main className={cName([styles.main, styles.withAnimation])} ref={mainRef}>
        <h1 className={styles.title}>{content[language].title}</h1>

        <p className={styles.description}>{content[language].description}</p>

        <div className={styles.grid}>
          {content[language].list?.map((item, index) => {
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
    zh: {
      title: "你好，NextJS!",
      description: "一个NextJS的小练习，基于pm2部署",
      list: [
        {
          label: "主题化",
          info: "Thematization",
        },
        {
          label: "响应式",
          info: "Responsive",
        },
        {
          label: "帧动画",
          info: "Frame animation",
        },
        {
          label: "国际化",
          info: "Internationalization",
        },
        {
          label: "文章5",
          info: "A test for article5",
        },
        {
          label: "文章6",
          info: "A test for article6",
        },
      ],
    },
    en: {
      title: "Hello NextJS!",
      description: "A Demo for NextJS, deployed by pm2",
      list: [
        {
          label: "Theme",
          info: "Thematization",
        },
        {
          label: "Response",
          info: "Responsive",
        },
        {
          label: "Frame",
          info: "Frame animation",
        },
        {
          label: "I18n",
          info: "Internationalization",
        },
        {
          label: "文章5",
          info: "A test for article5"
        },
        {
          label: "文章6",
          info: "A test for article6",
        },
      ],
    }
  };
};

export default Home;
