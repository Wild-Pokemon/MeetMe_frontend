import "@styles/pages/calendar/CalendarModal.scss";
import promiseInactive from "@assets/promise_inactive.svg";
import location from "@assets/calendar_location_icon.svg";
import peopleIcon from "@assets/calendar_people_icon.svg";
import timeIcon from "@assets/calendar_time_icon.svg";

function CalendarModalItem() {
  return (
    <div className="calendar-modal-item">
      <div className="calendar-modal-cover">
        <img src={promiseInactive} alt="밋미 아이콘" />
      </div>

      <div className="calendar-modal-item-contents">
        <h3 className="calendar-modal-item-tit">모각코</h3>

        <div className="calendar-modal-item-list">
          <div className="calendar-modal-item-info">
            <img
              className="calendar-modal-item-icon"
              src={timeIcon}
              alt="시간아이콘"
            />
            <p className="calendar-modal-item-text">오전 11:30</p>
          </div>
          <div className="calendar-modal-item-info">
            <img
              className="calendar-modal-item-icon"
              src={location}
              alt="시간아이콘"
            />
            <p className="calendar-modal-item-text">강남역 12번 출구</p>
          </div>
          <div className="calendar-modal-item-info">
            <img
              className="calendar-modal-item-icon"
              src={peopleIcon}
              alt="시간아이콘"
            />
            <p className="calendar-modal-item-text">홍길동 외 3명</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarModalItem;
