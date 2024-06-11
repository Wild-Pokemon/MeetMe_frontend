import "@styles/pages/calendar/CalendarModal.scss";
import Button from "@components/Button";
import CalendarModalItem from "@pages/calendar/CalendarModalItem";
import PropTypes from "prop-types";

function CalendarModal({ handleCloseModal }) {
  return (
    <div className="modal-wrapper">
      <div className="calendar-modal">
        <h2 className="calendar-modal-date">5월 28일 스케줄</h2>
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
