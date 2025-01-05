import bookLogo from "../../assets/open-book.png";

export default function Header({ selectedClass }) {
  return (
    <header className={selectedClass}>
      <img src={bookLogo} alt="book-icon" />
      <h1>Book Finder</h1>
    </header>
  );
}
