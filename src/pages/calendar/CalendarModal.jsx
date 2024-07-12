import styles from "@styles/pages/calendar/CalendarModal.module.scss";
import Button from "@components/Button";
import CalendarModalItem from "@pages/calendar/CalendarModalItem";
import PropTypes from "prop-types";
import { format, getDate, getMonth } from "date-fns";
import useCalendarStore from "@zustand/calendar.mjs";
import { useNavigate } from "react-router-dom";

function CalendarModal({ handleCloseModal }) {
  const { calendarData } = useCalendarStore();
  const toDay = format(new Date(), "yyyy-MM-dd");
  const month = getMonth(calendarData);
  const date = getDate(calendarData);
  const navigate = useNavigate();

  const handleProiseeNew = () => {
    navigate("/promise");
  };

  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.calendar_modal}>
        <h3>
          {month + 1}월 {date}일 스케줄
        </h3>
        <CalendarModalItem />
        <div className={styles.buttonBox}>
          {toDay <= calendarData ? (
            <Button text="추가" size="small" onClick={handleProiseeNew} />
          ) : (
            ""
          )}

          <Button
            text="닫기"
            size="small"
            color="color2"
            onClick={handleCloseModal}
          />
        </div>
      </div>
    </div>
  );
}

CalendarModal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};

export default CalendarModal;
