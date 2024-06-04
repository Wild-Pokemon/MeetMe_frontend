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
} from "date-fns";

function Calender() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = getYear(currentDate);
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const createMonth = useMemo(() => {
    const monthArray = [];
    let day = startDate;
    while (differenceInCalendarDays(endDate, day) >= 0) {
      monthArray.push(day);
      day = addDays(day, 1);
    }
    return monthArray;
  }, [startDate, endDate]);

  const day = createMonth.map((item, i) => <p key={i}>{format(item, "d")}</p>);

  const prev = useCallback(() => {
    setCurrentDate(subMonths(currentDate, 1));
  }, [currentDate]);

  const next = useCallback(() => {
    setCurrentDate(addMonths(currentDate, 1));
  }, [currentDate]);

  const weekList = ["일", "월", "화", "수", "목", "금", "토"];
  const week = weekList.map((item, i) => <p key={i}>{item}</p>);

  return (
    <div>
      <button type="button" onClick={prev}>
        이전달
      </button>
      <p>
        {year}년{format(currentDate, "M")}월
      </p>
      <button type="button" onClick={next}>
        다음달
      </button>
      {week}
      {day}
    </div>
  );
}

export default Calender;
