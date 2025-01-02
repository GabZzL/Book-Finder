import BookItem from "./BookItem";

export default function BooksList({ books }) {
  return (
    <div className="books-list">
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} bookData={book} />
        ))}
      </ul>
    </div>
  );
}
