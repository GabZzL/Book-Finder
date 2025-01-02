import { uiActions } from "./ui";
import { booksActions } from "./books";

export const fetchBooksData = () => {
  return async (dispatch, getState) => {
    // extract data from the state
    const state = getState();
    const option = state.ui.option;
    const searchTerms = state.books.searchTerms;

    // build the URL
    let url;

    if (option === "Title") {
      const { title, author } = searchTerms;
      url = `https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&startIndex=0&maxResults=5&printType=books&projection=lite`;
    } else if (option === "ISBN") {
      const { isbn } = searchTerms;
      url = `https://www.googleapis.com/books/v1/volumes?q=+isbn:${isbn}&projection=lite`;
    } else {
      dispatch(
        uiActions.setError({
          title: "Error!",
          message: "Invalid Search Option!",
        })
      );
      return;
    }

    // fetch the data function
    const fetchData = async () => {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Could not fetch books");
      }

      const data = await res.json();

      return data;
    };

    // dispatch the loading state
    dispatch(uiActions.setLoading(true));

    // try to fetch the data
    try {
      const booksData = await fetchData();

      if (booksData.items) {
        dispatch(booksActions.setBooks(booksData.items));
      } else {
        dispatch(booksActions.setBooks([]));
        dispatch(
          uiActions.setError({ title: "Error!", message: "No books found!" })
        );
      }
    } catch (error) {
      dispatch(
        uiActions.setError({
          title: "Error!",
          message: "Fetching books failed!",
        })
      );
    } finally {
      // reset the loading state
      dispatch(uiActions.setLoading(false));
    }
  };
};

export const fetchBookDetails = (bookId) => {
  return async (dispatch) => {
    const url = `https://www.googleapis.com/books/v1/volumes/${bookId}`;

    const fetchData = async () => {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Could not fetch book details");
      }

      const data = await res.json();
      return data;
    };

    dispatch(uiActions.setLoading(true));

    try {
      const bookData = await fetchData();

      if (bookData) {
        dispatch(booksActions.setSelectedBook(bookData));
      } else {
        dispatch(
          uiActions.setError({ title: "Error!", message: "No book found!" })
        );
      }
    } catch (error) {
      dispatch(
        uiActions.setError({
          title: "Error!",
          message: "Fetching book details failed!",
        })
      );
    } finally {
      dispatch(uiActions.setLoading(false));
    }
  };
};
