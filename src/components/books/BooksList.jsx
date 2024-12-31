import BookItem from "./BookItem";

export default function BooksList() {
  return (
    <div className="books-list">
      <ul>
        <BookItem />
        <BookItem />
      </ul>
    </div>
  );
}
