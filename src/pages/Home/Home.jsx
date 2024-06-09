// utils
import { useState, useEffect } from "react";
import { fetchNotionApi } from "../../utils";

// styles
import styles from "./Home.module.scss";

// components
import Navigation from "@Components/navigation/navigation";
import HomeBalanceCard from "@Components/home-balance-card/home-balance-card";

function Home() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [list, setList] = useState([]);

  const fetchIncomeApi = async () => {
    try {
      const result = await fetchNotionApi("/income");
      setIncome(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchExpenseApi = async () => {
    try {
      const result = await fetchNotionApi("/expense");
      setExpense(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchListApi = async () => {
    try {
      const result = await fetchNotionApi("/list");
      setList(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchIncomeApi();
    fetchExpenseApi();
    fetchListApi();
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.home__pie__chart}></div>
      <HomeBalanceCard income={income} expense={expense} />
      <div className={styles.home__table}></div>
      <Navigation />
    </div>
  );
}

export default Home;
