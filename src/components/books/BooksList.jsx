import BookItem from "./BookItem";
import classes from './booklist.module.css'

export default function BooksList({ books }) {
  return (
    <div>
      <ul className={classes.bookList}>
        {books.map((book) => (
          <BookItem key={book.id} bookData={book} />
        ))}
      </ul>
    </div>
  );
}
