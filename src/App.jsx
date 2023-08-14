import { useState } from "react";
import { MenuList } from "./components/MenuList/MenuList";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import "./global.css";

export function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Choose your React course difficulty
      </h1>
      <div className="main">
        <MenuList />
        <DisplayDifficulty difficultyLevel="low" />
      </div>
    </>
  );
}
