import styles from "@styles/components/Modal.module.scss";
import PropTypes from "prop-types";

function Modal({ children, size = "large", text }) {
  return (
    <div className={styles.modal_wrapper}>
      <div className={`${styles[`modal_${size}`]}`}>
        {text}
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.array.isRequired,
  size: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Modal;
