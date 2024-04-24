import ImageCard from "../imageCard/ImageCard";
import css from "./ImageGallery.module.css";

function ImageGallery({ images, openModal }) {
  return (
    <ul className={css.gallery}>
      {images.map((image) => {
        return (
          <li
            onClick={() => {
              openModal(image);
            }}
            key={image.id}
          >
            <ImageCard
              openModal={openModal}
              image={image}
              // photo={image.urls.small}
              // descr={image.alt_description}
            ></ImageCard>
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;