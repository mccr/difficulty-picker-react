import { MenuListItem } from "../MenuListItem/MenuListItem";
import style from './style.module.css';

export function MenuList() {
  const difficultyLevels = ["Low", "Medium", "Hard", "Insane"];

  const listItems = difficultyLevels.map((level) => (
    <MenuListItem listItem={level} />
  ));
  return <ul className={`box ${style.container}`} >{listItems}</ul>;
}
