import css from "./ImageCard.module.css";

function ImageCard({ image, openModal }) {
  return (
    <div
      onClick={() => {
        openModal(image);
      }}
      className={css.card}
    >
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageCard;