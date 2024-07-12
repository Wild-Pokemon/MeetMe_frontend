import styles from "@styles/pages/friends/FriendModal.module.scss";

// eslint-disable-next-line react/prop-types
function FriendModal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className={styles.ModalBackdrop}>
      <div className={styles.ModalContent}>
        <button onClick={onClose} className={styles.CloseButton}>
          &times;
        </button>
        <div className={styles.ModalText}>{children}</div>
      </div>
    </div>
  );
}

export default FriendModal;
