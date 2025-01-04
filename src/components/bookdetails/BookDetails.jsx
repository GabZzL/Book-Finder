import { useSelector } from "react-redux";
import DOMPurify from "dompurify";

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
    <div className="book-details">
      <h2 className="title">{title}</h2>
      <h3 className="subtitle">{subtitle}</h3>
      <img className="image" src={img} alt={`image-${selectedBook.id}`} />
      <ul className="author">
        <li className="author-title">Authors:</li>
        {authors.length > 0 ? (
          authors.map((author) => (
            <li key={`${selectedBook.id}-${author}`} className="author-name">
              {author}
            </li>
          ))
        ) : (
          <li key="undefined" className="author-name">
            undefined
          </li>
        )}
      </ul>
      <p className="publisher">
        <span>Publisher: </span>
        {publisher || "undefined"}
      </p>
      <p className="published">
        <span>Published: </span>
        {publishedDate}
      </p>
      <p className="rating">
        <span>Average Rating: </span>
        {averageRating}
      </p>
      <div className="description">
        <p className="description-title">Book Description:</p>
        <p
          className="description-content"
          dangerouslySetInnerHTML={{ __html: cleanDescription }}
        ></p>
      </div>
    </div>
  );
}
