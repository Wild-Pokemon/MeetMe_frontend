import PropTypes from "prop-types";
import "@styles/components/Modal.scss";

function Modal({ children, size = "large" }) {
  return (
    <div className="modal-wrapper">
      <div className={`modal-${size}`}>{children}</div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.array.isRequired,
  size: PropTypes.string.isRequired,
};

export default Modal;
