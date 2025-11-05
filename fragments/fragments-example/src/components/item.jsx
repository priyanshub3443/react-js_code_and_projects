import styles from "./item.module.css";
const Item = ({ foodItems }) => {
  return (
    <li className="list-group-item kg-item"><span className={styles["p-span"]}>{foodItems}</span></li>
  )
}
export default Item;