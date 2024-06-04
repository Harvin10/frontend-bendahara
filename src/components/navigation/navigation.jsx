import styles from "./navigation.module.scss";
import home from "@Assets/icon-home.svg";
import plus from "@Assets/icon-plus.svg";
import { Client } from '@notionhq/client';

const navigationData = [
  {
    img: home,
    alt: "home",
    title: "Home",
  },
  {
    img: plus,
    alt: "add",
    title: "Add",
  },
];

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const getBlogPosts = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results
}

function navigation() {
  return (
    <div className={styles.navigation}>
      <div>{getBlogPosts}</div>
      {navigationData.map(({ img, alt, title }, index) => {
        return (
          <div className={styles.navigation__child} key={index}>
            <img
              className={styles.navigation__child__image}
              src={img}
              alt={alt}
            />
            <p>{title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default navigation;
