import style from "./style.module.css";

export function MenuListItem(props) {
  return <li className={style.listItem}>set to: {props.listItem}</li>;
}
