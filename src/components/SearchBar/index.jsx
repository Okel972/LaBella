import './SearchBar.css';

export const SearchBar = props => {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <hr />
        <input
          type="search"
          placeholder="Search"
          onChange={event => props.setSearch(event.target.value)}
          className="search-bar-input"
        />
      </div>
    </div>
  );
};
