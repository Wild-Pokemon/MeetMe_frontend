import styles from "@styles/pages/calendar/CalendarModal.module.scss";
import promiseInactive from "@assets/promise_inactive.svg";
import location from "@assets/calendar_location_icon.svg";
import peopleIcon from "@assets/calendar_people_icon.svg";
import timeIcon from "@assets/calendar_time_icon.svg";

function CalendarModalItem() {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalIcon}>
        <img src={promiseInactive} alt="밋미 아이콘" />
      </div>

      <div className={styles.modalContent}>
        <h4>모각코</h4>

        <div className={styles.modalDetails}>
          <div className={styles.modalDetailItem}>
            <img src={timeIcon} alt="시간아이콘" />
            <p>오전 11:30</p>
          </div>
          <div className={styles.modalDetailItem}>
            <img src={location} alt="시간아이콘" />
            <p>강남역 12번 출구</p>
          </div>
          <div className={styles.modalDetailItem}>
            <img src={peopleIcon} alt="시간아이콘" />
            <p>홍길동 외 3명</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarModalItem;
