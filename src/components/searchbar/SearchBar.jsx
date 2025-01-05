import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { booksActions } from "../../store/books";
import { fetchBooksData } from "../../store/book-actions";

import Form from "../../UI/Form";

export default function SearchBar() {
  const [isbnInput, setIsbnInput] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [authorInput, setAthorInput] = useState("");
  const dispath = useDispatch();
  const option = useSelector((state) => state.ui.option);

  function handleInputs(e) {
    const inputName = e.target.name;
    const value = e.target.value;

    if (inputName === "title") {
      setTitleInput(value);
    } else if (inputName === "author") {
      setAthorInput(value);
    } else if (inputName === "isbn") {
      setIsbnInput(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (option === "ISBN") {
      setIsbnInput("");
    } else if (option === "Title") {
      setTitleInput("");
      setAthorInput("");
    }

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    dispath(booksActions.setSearchTerms(data));
    dispath(fetchBooksData());
  }

  if (option === "ISBN") {
    return (
      <Form onSubmit={handleSubmit} text="Submit">
        <div>
          <input
            type="text"
            name="isbn"
            placeholder="ISBN"
            value={isbnInput}
            onChange={handleInputs}
            required
          />
        </div>
      </Form>
    );
  }

  return (
    <Form onSubmit={handleSubmit} text="Submit">
      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={titleInput}
          onChange={handleInputs}
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={authorInput}
          onChange={handleInputs}
          required
        />
      </div>
    </Form>
  );
}
