import styles from "pages/Home/Home.module.scss";
import Navigation from "components/navigation/navigation";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home__pie__chart}></div>
      <div className={styles.home__balance}>
        <p className={styles.home__balance__nominal}>
          Rp. 0
        </p>
        <div className={styles.home__balance__info__wrapper}>
          <p className={styles.home__balance__info__wrapper__incomes}>Rp. 0</p>
          <p className={styles.home__balance__info__wrapper__expenses}>Rp. 0</p>
        </div>
      </div>
      <div className={styles.home__table}></div>
      <Navigation />
    </div>
  );
}

export default Home;
