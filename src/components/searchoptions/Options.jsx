import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui";
import Button from "../../UI/Button";
import classes from "./options.module.css";

export default function Options() {
  const dispatch = useDispatch();

  function handleSetOption(optionName) {
    dispatch(uiActions.setOption(optionName));
  }

  return (
    <div className={classes.options}>
      <h2 className={classes["options-title"]}>Look for</h2>
      <div className={classes["options-actions"]}>
        <Button onClick={() => handleSetOption("Title")} text="Title, Author" />
        <Button onClick={() => handleSetOption("ISBN")} text="ISBN" />
      </div>
    </div>
  );
}
