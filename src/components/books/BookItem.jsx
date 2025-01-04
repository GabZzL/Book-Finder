import { useDispatch } from "react-redux";
import { fetchBookDetails } from "../../store/book-actions";

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
    <li>
      <img className="image" src={img} alt={`image-${bookData.id}`} />
      <h2 className="title" onClick={() => handleSelectedItem(bookData.id)}>
        {title}
      </h2>
      <ul className="author">
        <li className="author-title">Authors:</li>
        {authors.length > 0 ? (
          authors.map((author) => (
            <li key={`${bookData.id}-${author}`} className="author-name">
              {author}
            </li>
          ))
        ) : (
          <li key="undefined" className="author-name">
            Undefined
          </li>
        )}
      </ul>
      <p className="published">
        <span>Date: </span>
        {publishedDate}
      </p>
      <p className="publisher">
        <span>Publisher: </span>
        {publisher || "undefined"}
      </p>
    </li>
  );
}
