import { useSelector } from "react-redux";

export default function BookDetails() {
  const selectedBook = useSelector((state) => state.books.selectedBook);

  return (
    <div className="book-details">
      <h3>{selectedBook.volumeInfo.title}</h3>
      <p>{selectedBook.volumeInfo.subtitle}</p>
      <p>{selectedBook.volumeInfo.authors[0]}</p>
    </div>
  );
}
