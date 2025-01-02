import { useDispatch } from "react-redux";
import { fetchBookDetails } from "../../store/book-actions";

export default function BookItem({ bookData }) {
  const dispatch = useDispatch();

  function handleSelectedItem(bookId) {
    dispatch(fetchBookDetails(bookId));
  }

  return (
    <li>
      <h3 onClick={() => handleSelectedItem(bookData.id)}>
        {bookData.volumeInfo.title}
      </h3>
      <p>{bookData.volumeInfo.description}</p>
    </li>
  );
}
