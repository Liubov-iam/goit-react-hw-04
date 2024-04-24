import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

function SearchBar({ onSubmit }) {
  function handleSearchBtn(evt) {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value.trim();
    if (query) {
      onSubmit(query);
    } else {
      toast.error("Please enter the text.", { position: "top-right" });
    }
    form.reset();
  }

  return (
    <header>
      <form className={css.searchBar} onSubmit={handleSearchBtn}>
        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button onClick={console.log} type="submit">
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
}

export default SearchBar;