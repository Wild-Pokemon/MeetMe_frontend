import Button from "@components/Button";
import PropTypes from "prop-types";
import styles from "@styles/pages/promise/PromiseLocationModal.module.scss";
import KakaoMap from "@components/KakaoMap";

function PromiseLocationModal({ handleLocation }) {
  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.promise_modal}>
        <div className={styles.promise_modal_header}>Header</div>
        <div className={styles.promise_modal_main}>
          <KakaoMap />
        </div>
        <div className={styles.promise_modal_footer}>
          <Button text={"완료"} size={"small"} onClick={handleLocation} />
        </div>
      </div>
    </div>
  );
}

PromiseLocationModal.propTypes = {
  handleLocation: PropTypes.func.isRequired,
};

export default PromiseLocationModal;
