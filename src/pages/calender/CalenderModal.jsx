import "@styles/pages/calender/CalenderModal.scss";
import CalenderModalItem from "./CalenderModalItem";

function CalenderModal() {
  return (
    <div className="modal-wrapper">
      <div className="calender-modal">
        <h2 className="calender-modal-date">5월 28일 스케줄</h2>
        <CalenderModalItem />
      </div>
    </div>
  );
}

export default CalenderModal;
