import { MenuListItem } from "../MenuListItem/MenuListItem";
import { DIFFICULTIES } from "./constant";
import style from "./style.module.css";

export function MenuList(props) {
  const listItems = DIFFICULTIES.map((level) => (
    <MenuListItem
      isSelected={props.difficultyLevel == level}
      onItemClick={props.onItemClicked}
      difficulty={level}
    />
  ));
  return <ul className={`box ${style.container}`}>{listItems}</ul>;
}
