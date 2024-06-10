// styles
import styles from "./display-money.module.scss";

// utils
import { formatMoney } from "@Utils";

function displayMoney({ amount, color }) {
  return (
    <div className={styles.displayMoney}>
      <div className={`${styles.displayMoney__currency} ${styles[color]}`}>
        Rp
      </div>
      <p className={styles.displayMoney__amount}>{formatMoney(amount)}</p>
    </div>
  );
}

export default displayMoney;
