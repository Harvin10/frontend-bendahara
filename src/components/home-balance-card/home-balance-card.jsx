// styles
import styles from "./home-balance-card.module.scss";

// components
import DisplayMoney from "@Components/display-money/display-money";

function homeBalanceCard({ income, expense }) {
  return (
    <div className={styles.balance}>
      <DisplayMoney amount={income - expense} />
      <DisplayMoney amount={income} color="green" />
      <DisplayMoney amount={expense} color="red" />
    </div>
  );
}

export default homeBalanceCard;
