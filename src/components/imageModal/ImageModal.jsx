import Modal from "react-modal";
import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ImageModal({ image, isModalOpen, closeModal }) {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={customStyles}
      overlayClassName={css.overlay}
      className={css.modal}
    >
      <img src={image.urls.regular} alt="" />
    </Modal>
  );
}

export default ImageModal;