export default function Form({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      {children}
      <div className="actions">
        <button>Submit</button>
      </div>
    </form>
  );
}
