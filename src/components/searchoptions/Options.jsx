import { useDispatch } from "react-redux";

import { uiActions } from "../../store/ui";

export default function Options() {
  const dispatch = useDispatch();

  function handleSetOption(optionName) {
    dispatch(uiActions.setOption(optionName));
  }

  return (
    <div className="options">
      <h2>Look for</h2>
      <div className="actions">
        <button onClick={() => handleSetOption("Title")}>Title, Author</button>
        <button onClick={() => handleSetOption("ISBN")}>ISBN</button>
      </div>
    </div>
  );
}
