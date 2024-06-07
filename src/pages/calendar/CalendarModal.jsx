import "@styles/pages/calendar/CalendarModal.scss";
import CalendarModalItem from "./CalendarModalItem";

function CalendarModal() {
  return (
    <div className="modal-wrapper">
      <div className="calendar-modal">
        <h2 className="calendar-modal-date">5월 28일 스케줄</h2>

        <CalendarModalItem />
      </div>
    </div>
  );
}

export default CalendarModal;
