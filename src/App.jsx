import Layout from "./components/layout/Layout";
import Options from "./components/searchoptions/Options";
import SearchBar from "./components/searchbar/SearchBar";
import BooksList from "./components/books/BooksList";
import BookDetails from "./components/bookdetails/BookDetails";
import "./App.css";

export default function App() {
  return (
    <Layout>
      <Options />
      <SearchBar />
      <BooksList />
      <BookDetails />
    </Layout>
  );
}
