import style from "./style.module.css";

export function MenuListItem(props) {
  const onItemClick = () => {
    props.onItemClick(props.difficulty);
  };

  return (
    <li
      onClick={onItemClick}
      className={`${style.listItem} ${props.isSelected ? style.selected : ""}`}
    >
      set to: {props.difficulty}
    </li>
  );
}
