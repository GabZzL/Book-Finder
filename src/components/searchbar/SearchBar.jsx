export default function SearchBar() {
  const text = "Title, Author";

  return (
    <div className="search-bar">
      <input type="text" name="user-input" placeholder={text} required />
      <button>Search</button>
    </div>
  );
}
