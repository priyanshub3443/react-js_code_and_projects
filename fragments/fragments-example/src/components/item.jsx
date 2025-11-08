import styles from "./Item.module.css";
const Item = ({ foodItems }) => {
  return (
    <li className={`list-group-item ${styles["kgItem"]}`} > <span className={styles.pSpan}>{foodItems}</span></li >
  )
}
export default Item;