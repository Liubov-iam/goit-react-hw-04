import css from "./ImageCard.module.css";

function ImageCard({ image, openModal }) {
  return (
    <div className={css.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => openModal(image)}
      />
    </div>
  );
}

export default ImageCard;