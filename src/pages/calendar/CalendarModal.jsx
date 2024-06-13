import styles from "@styles/pages/calendar/CalendarModal.module.scss";
import Button from "@components/Button";
import CalendarModalItem from "@pages/calendar/CalendarModalItem";
import PropTypes from "prop-types";

function CalendarModal({ handleCloseModal }) {
  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.calendar_modal}>
        <h3>5월 28일 스케줄</h3>
        <CalendarModalItem />
        <Button text="닫기" size="small" onClick={handleCloseModal} />
      </div>
    </div>
  );
}

CalendarModal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};

export default CalendarModal;
