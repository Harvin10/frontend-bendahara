// styles
import styles from "./home-transaction-table.module.scss";

// utils
import { formatMoney, splitDate } from "@Utils";

function homeTransactionTable({ list, isLoading }) {
  const getTransactionType = (id) => {
    const type = id.split("-")[0];
    if (type === "IN") return "INCOME";
    return "EXPENSE";
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.column}>
          <th className={styles.headerRow}>Date</th>
          <th className={styles.headerRow}>Source / Receiver</th>
          <th className={styles.headerRow}>Amount</th>
          <th className={styles.headerRow}>Category</th>
        </tr>
      </thead>
      {isLoading ? (
        <tbody>
          <tr>
            <td colSpan={4} className={styles.loading}>
              Loading...
            </td>
          </tr>
        </tbody>
      ) : (
        <tbody>
          {list.map(({ page_id, properties }) => {
            const { id, amount, category, date, receiver, source } = properties;
            const { day, month, year } = splitDate(date);
            return (
              <tr className={styles.column} key={page_id}>
                <td className={styles.row}>
                  <div
                    className={`${styles.date} ${
                      getTransactionType(id) === "INCOME"
                        ? styles.date__income
                        : styles.date__expense
                    }`}
                  >
                    <p className={styles.date__day}>{day}</p>
                    <p className={styles.date__month}>{month}</p>
                    <p className={styles.date__year}>{year}</p>
                  </div>
                </td>
                <td className={styles.row}>
                  {getTransactionType(id) === "INCOME" ? source : receiver}
                </td>
                <td className={`${styles.row} ${styles.amount}`}>
                  Rp. {formatMoney(amount)}
                </td>
                <td className={styles.row}>{category}</td>
              </tr>
            );
          })}
        </tbody>
      )}
    </table>
  );
}

export default homeTransactionTable;
