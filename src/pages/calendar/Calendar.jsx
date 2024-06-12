import styles from "@styles/pages/calendar/Calendar.module.scss";
import { useCallback, useMemo, useState } from "react";
import {
  getYear,
  subMonths,
  addMonths,
  format,
  startOfMonth,
  startOfWeek,
  endOfWeek,
  endOfMonth,
  differenceInCalendarDays,
  addDays,
  isSameMonth,
} from "date-fns";
import nextIcon from "@assets/calendar_next.svg";
import prevIcon from "@assets/calendar_prev.svg";
import CalendarModal from "@pages/calendar/CalendarModal";
// import promiseInactive from "@assets/promise_inactive.svg";

function Calendar() {
  const [isModal, setIsModal] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = getYear(currentDate);
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const weekList = ["일", "월", "화", "수", "목", "금", "토"];
  const weeks = weekList.map((item, i) => (
    <div className={styles.weeksItem} key={i}>
      {item}
    </div>
  ));

  const createMonth = useMemo(() => {
    const monthArray = [];
    let day = startDate;
    for (
      let currentDay = day;
      differenceInCalendarDays(endDate, currentDay) >= 0;
      currentDay = addDays(currentDay, 1)
    ) {
      monthArray.push(currentDay);
    }
    return monthArray;
  }, [startDate, endDate]);

  const handleOpenModal = () => {
    setIsModal(true);
  };

  const handleCloseModal = () => {
    setIsModal(false);
  };

  const days = createMonth.map((item, i) => {
    const isCurrentMonth = isSameMonth(item, currentDate);

    return isCurrentMonth ? (
      <div className={styles.daysItem} key={i} onClick={handleOpenModal}>
        {format(item, "d")}
        <p>11시 모각코 | 강남역12번 출구 | 홍길동외 3명</p>
        {/* //일정만들기 달력 구현시 이미지로 표시
         <div className={styles.daysCover}>
          <img
            className={daysSrc}
            src={promiseInactive}
            alt="약속 없음(지남)"
          />
        </div>
        */}
      </div>
    ) : (
      <div className={styles.daysItem_null} key={i}></div>
    );
  });

  const prevMonth = useCallback(() => {
    setCurrentDate(subMonths(currentDate, 1));
  }, [currentDate]);

  const nextMonth = useCallback(() => {
    setCurrentDate(addMonths(currentDate, 1));
  }, [currentDate]);

  return (
    <div>
      {isModal && <CalendarModal handleCloseModal={handleCloseModal} />}
      <div className={styles.calendar_wrapper}>
        <div className={styles.calendar_header}>
          <h2>
            {year}년{format(currentDate, "M")}월
          </h2>
          <button className={styles.prevBtn} type="button" onClick={prevMonth}>
            <img src={prevIcon} alt="이전달" />
          </button>

          <button className={styles.nextBtn} type="button" onClick={nextMonth}>
            <img src={nextIcon} alt="다음달" />
          </button>
        </div>
        <div className={styles.weeksList}>{weeks}</div>
        <div className={styles.daysList}>{days}</div>
      </div>
    </div>
  );
}

export default Calendar;
