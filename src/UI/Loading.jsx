import classes from "./loading.module.css";

export default function Loading({text}) {
  return (
    <div className={classes.loading}>
      <div className={classes.spinner}></div>
      <p className={classes.text}>{text}</p>
    </div>
  );
}
