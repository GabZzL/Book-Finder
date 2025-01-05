import Button from "./Button";
import classes from './form.module.css'

export default function Form({ children, onSubmit, text }) {
  return (
    <form onSubmit={onSubmit} className={classes.form}>
      {children}
      <div className="actions">
        <Button text={text}/>
      </div>
    </form>
  );
}
