import ItemImg from "./ItemImg";

const ListImg = ({ images }) => {
  const renderImages = images.map((image) => {
    return <ItemImg image={image} key={image.id} />;
  });
  return <ul>{renderImages}</ul>;
};
export default ListImg;
