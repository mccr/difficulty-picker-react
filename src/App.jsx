import { useState } from "react";
import { MenuList } from "./components/MenuList/MenuList";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import "./global.css";

export function App() {
  const [currentDifficulty, setDifficulty] = useState("low");

  const onMenuListItemClicked = (difficulty) => {
    setDifficulty(difficulty);
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Choose your React course difficulty
      </h1>
      <div className="main">
        <MenuList
          difficultyLevel={currentDifficulty}
          onItemClicked={onMenuListItemClicked}
        />
        <DisplayDifficulty difficultyLevel={currentDifficulty} />
      </div>
    </>
  );
}
