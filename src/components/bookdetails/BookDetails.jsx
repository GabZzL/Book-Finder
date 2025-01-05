import { useSelector } from "react-redux";
import DOMPurify from "dompurify";
import classes from "./bookdetails.module.css";

export default function BookDetails() {
  const selectedBook = useSelector((state) => state.books.selectedBook);

  const {
    title,
    subtitle,
    authors,
    publisher,
    publishedDate,
    averageRating,
    imageLinks,
    description,
  } = selectedBook.volumeInfo;

  let img;
  const cleanDescription = DOMPurify.sanitize(description);

  if (imageLinks) {
    img = imageLinks.thumbnail;
  } else {
    img =
      "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";
  }

  return (
    <div className={classes.bookDetails}>
      <h2 className={classes.title}>{title}</h2>
      <h3 className={classes.subtitle}>{subtitle}</h3>
      <img
        className={classes.imagen}
        src={img}
        alt={`image-${selectedBook.id}`}
      />
      <ul className={classes.authors}>
        <li className={classes["author-title"]}>Authors:</li>
        {authors.length > 0 ? (
          authors.map((author) => (
            <li key={`${selectedBook.id}-${author}`}>
              <p className={classes["author-name"]}>{author}</p>
            </li>
          ))
        ) : (
          <li key="undefined">
            <p className={classes["author-name"]}>Undefined</p>
          </li>
        )}
      </ul>
      <p className={classes.publisher}>
        <span>Publisher: </span>
        {publisher || "undefined"}
      </p>
      <p className={classes.published}>
        <span>Published: </span>
        {publishedDate}
      </p>
      <p className={classes.rating}>
        <span>Average Rating: </span>
        {averageRating || "undefined"}
      </p>
      <div className={classes.description}>
        <p className={classes["description-title"]}>Book Description:</p>
        <p
          className={classes["description-content"]}
          dangerouslySetInnerHTML={{ __html: cleanDescription }}
        ></p>
      </div>
    </div>
  );
}
