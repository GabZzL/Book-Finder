import { useSelector, useDispatch } from "react-redux";
import { booksActions } from "../../store/books";
import { fetchBooksData } from "../../store/book-actions";

import Form from "../../UI/Form";

export default function SearchBar() {
  const dispath = useDispatch();
  const option = useSelector((state) => state.ui.option);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    dispath(booksActions.setSearchTerms(data));
    dispath(fetchBooksData());
  }

  if (option === "ISBN") {
    return (
      <Form onSubmit={handleSubmit} text="Submit">
        <div>
          <input type="text" name="isbn" placeholder="ISBN" required />
        </div>
      </Form>
    );
  }

  return (
    <Form onSubmit={handleSubmit} text="Submit">
      <div>
        <input type="text" name="title" placeholder="Title" required />
      </div>
      <div>
        <input type="text" name="author" placeholder="Author" required />
      </div>
    </Form>
  );
}
