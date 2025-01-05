import { useSelector } from "react-redux";

import Layout from "./components/layout/Layout";
import Options from "./components/searchoptions/Options";
import SearchBar from "./components/searchbar/SearchBar";
import BooksList from "./components/books/BooksList";
import BookDetails from "./components/bookdetails/BookDetails";
import Modal from "./UI/Modal";
import Loading from "./UI/Loading";
import "./App.css";

export default function App() {
  const option = useSelector((state) => state.ui.option);
  const booksList = useSelector((state) => state.books.booksList);
  const selectedBook = useSelector((state) => state.books.selectedBook);
  const loading = useSelector((state) => state.ui.loading);
  const error = useSelector((state) => state.ui.error);

  return (
    <Layout>
      {!option && <Options />}
      {option && !selectedBook ? <SearchBar /> : null}
      {loading && <Loading text="Loading..." />}
      {booksList.length > 0 && !selectedBook ? (
        <BooksList books={booksList} />
      ) : null}
      {selectedBook && <BookDetails />}
      {error && <Modal open={error} />}
    </Layout>
  );
}
