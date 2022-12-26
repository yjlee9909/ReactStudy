import { useState } from "react";
import ListImg from "./components/ListImg";
import SearchBar from "./components/SearchBar";
import searchImg from "./imgApi";

searchImg();

function App() {
  const [images, setImages] = useState([]);

  const handleKeyword = async (keyword) => {
    // console.log(keyword);
    const result = await searchImg(keyword);
    console.log(result);
    setImages(result);
  };

  return (
    <div>
      <SearchBar searching={handleKeyword} />
      <ListImg images={images} />
    </div>
  );
}
export default App;
