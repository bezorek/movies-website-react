
interface Props {
  searchTerm: string;
  onSearchTerm: (text: string) => void;
}

const Search = ({ searchTerm, onSearchTerm }: Props) => {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />
        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(e) => onSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
