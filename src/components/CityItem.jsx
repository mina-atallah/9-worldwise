import styles from "./CityItem.module.css";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
    weekday: "short",
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, date, emoji, notes } = city;
  return (
    <li className={styles.cityItem}>
      {/* <span className={styles.emoji}>{emoji}</span> */}
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>({formatDate(date)})</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

export default CityItem;