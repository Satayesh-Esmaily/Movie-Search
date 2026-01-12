export default function SuggestedMovies({ setSearchTerm }) {
  const suggestedMovies = ["Batman", "Dune", "Spider-Man", "Interstellar", "Harry Potter"];

  return (
    <div className="mt-3 d-flex flex-wrap gap-2">
      {suggestedMovies.map((chip) => (
        <button
          key={chip}
          type="button"
          className="btn btn-sm btn-soft rounded-pill"
          onClick={() => setSearchTerm(chip)} 
        >
          {chip}
        </button>
      ))}
    </div>
  );
}
