import styles from "./navigation.module.scss";
import home from "@Assets/icon-home.svg";
import plus from "@Assets/icon-plus.svg";
import { Link } from "react-router-dom";

function navigation() {
  const navigationData = [
    {
      img: home,
      alt: "home",
      title: "Home",
      linkPath: "/home",
    },
    {
      img: plus,
      alt: "add",
      title: "Add",
      linkPath: "/add",
    },
  ];

  return (
    <div className={styles.navigation}>
      {navigationData.map(({ img, alt, linkPath, title }, index) => {
        return (
          <Link to={linkPath} className={styles.navigation__child} key={index}>
            <img
              className={styles.navigation__child__image}
              src={img}
              alt={alt}
            />
            <p>{title}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default navigation;
