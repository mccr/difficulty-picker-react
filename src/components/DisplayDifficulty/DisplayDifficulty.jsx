import style from './style.module.css';

export function DisplayDifficulty(props) {
    return <div className={`box ${style.container}`}>Difficulty set to {props.difficultyLevel}</div>;
}
