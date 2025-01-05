import classes from "./button.module.css";

export default function Button({ text, onClick }) {
  return (
    <button className={classes.button} onClick={onClick || null}>
      {text}
    </button>
  );
}
