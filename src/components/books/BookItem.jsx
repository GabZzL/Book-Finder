import { useDispatch } from "react-redux";
import { fetchBookDetails } from "../../store/book-actions";
import classes from "./bookitem.module.css";

export default function BookItem({ bookData }) {
  const dispatch = useDispatch();

  const { title, authors, publisher, publishedDate, imageLinks } =
    bookData.volumeInfo;

  let img;

  function handleSelectedItem(bookId) {
    dispatch(fetchBookDetails(bookId));
  }

  if (imageLinks) {
    img = imageLinks.thumbnail;
  } else {
    img =
      "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";
  }

  return (
    <div
      className={classes.bookItem}
      onClick={() => handleSelectedItem(bookData.id)}
    >
      <li>
        <img className="image" src={img} alt={`image-${bookData.id}`} />
        <div className={classes.content}>
          <h2 className={classes.title}>{title}</h2>
          <ul className="author">
            <li className={classes["author-title"]}>Authors:</li>
            {authors.length > 0 ? (
              authors.map((author) => (
                <li key={`${bookData.id}-${author}`}>
                  <p className={classes["author-name"]}>{author}</p>
                </li>
              ))
            ) : (
              <li key="undefined" className="author-name">
                <p className={classes["author-name"]}>Undefined</p>
              </li>
            )}
          </ul>
          <p className={classes.publishedDate}>
            <span>Date: </span>
            {publishedDate}
          </p>
          <p className={classes.publisher}>
            <span>Publisher: </span>
            {publisher || "undefined"}
          </p>
        </div>
      </li>
    </div>
  );
}
