import "@styles/pages/calender/CalenderModal.scss";
import promiseInactive from "@assets/promise_inactive.svg";
import location from "@assets/calender_location_icon.svg";
import peopleIcon from "@assets/calender_people_icon.svg";
import timeIcon from "@assets/calender_time_icon.svg";

function CalenderModalItem() {
  return (
    <div className="calender-modal-item">
      <div className="calender-modal-cover">
        <img src={promiseInactive} alt="밋미 아이콘" />
      </div>

      <div className="calender-modal-item-contents">
        <h3 className="calender-modal-item-tit">모각코</h3>

        <div className="calender-modal-item-list">
          <div className="calender-modal-item-info">
            <img
              className="calender-modal-item-icon"
              src={timeIcon}
              alt="시간아이콘"
            />
            <p className="calender-modal-item-text">오전 11:30</p>
          </div>
          <div className="calender-modal-item-info">
            <img
              className="calender-modal-item-icon"
              src={location}
              alt="시간아이콘"
            />
            <p className="calender-modal-item-text">강남역 12번 출구</p>
          </div>
          <div className="calender-modal-item-info">
            <img
              className="calender-modal-item-icon"
              src={peopleIcon}
              alt="시간아이콘"
            />
            <p className="calender-modal-item-text">홍길동 외 3명</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalenderModalItem;
