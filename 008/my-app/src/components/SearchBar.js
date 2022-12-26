import { useState } from "react";
const SearchBar = ({ searching }) => {
  const [keyword, setKeword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searching(keyword);
  };
  const handleInput = (e) => {
    setKeword(e.target.value);
  };

  return (
    <nav>
      <form onSubmit={handleSubmit}>
        <label htmlFor="keyword">검색어를 입력하세요</label>
        <input
          type="text"
          id="keyword"
          value={keyword}
          onChange={handleInput}
        ></input>
        <button>검색</button>
      </form>
    </nav>
  );
};
export default SearchBar;
