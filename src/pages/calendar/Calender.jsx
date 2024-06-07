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
import promiseInactive from "@assets/promise_inactive.svg";
import "@styles/pages/calender/Calender.scss";
import CalenderModal from "./CalenderModal";

function Calender() {
  const [isModal, setIsModal] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = getYear(currentDate);
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const weekList = ["일", "월", "화", "수", "목", "금", "토"];
  const weeks = weekList.map((item, i) => (
    <div className="calender-weeks-item" key={i}>
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

  const days = createMonth.map((item, i) => {
    const isCurrentMonth = isSameMonth(item, currentDate);
    return (
      <div
        className={` ${
          isCurrentMonth ? "calender-days-item" : "calender-days-item type-gray"
        }`}
        key={i}
      >
        {format(item, "d")}
        <div className="calender-days-cover">
          <img
            className="calender-days-src"
            src={promiseInactive}
            alt="약속 없음(지남)"
          />
        </div>
      </div>
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
      {isModal ? <CalenderModal /> : ""}
      <div className="calender-wrapper">
        <div className="calender-header">
          <h2 className="calender-month">
            {year}년{format(currentDate, "M")}월
          </h2>
          <button
            className="calender-prev-btn"
            type="button"
            onClick={prevMonth}
          >
            <img src={prevIcon} alt="이전달" />
          </button>

          <button
            className="calender-next-btn"
            type="button"
            onClick={nextMonth}
          >
            <img src={nextIcon} alt="다음달" />
          </button>
        </div>
        <div className="calender-weeks">{weeks}</div>
        <div className="calender-days">{days}</div>
      </div>
    </div>
  );
}

export default Calender;
