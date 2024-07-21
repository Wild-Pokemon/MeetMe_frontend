import styles from "@styles/pages/calendar/Calendar.module.scss";
import { useCallback, useEffect, useMemo, useState } from "react";
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
import useCustomAxios from "@hooks/useCustomAxios.mjs";
import useCalendarStore from "@zustand/calendar.mjs";

function Calendar() {
  const [isModal, setIsModal] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const { setCalendarData } = useCalendarStore();
  const year = getYear(currentDate);
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const [data, setData] = useState();
  const axios = useCustomAxios();

  //이전달
  const prevMonth = useCallback(() => {
    setCurrentDate(subMonths(currentDate, 1));
  }, [currentDate]);

  //다음달
  const nextMonth = useCallback(() => {
    setCurrentDate(addMonths(currentDate, 1));
  }, [currentDate]);

  const month = format(currentDate, "yyyy-MM");

  //데이터 통신
  const fetchData = async (month) => {
    try {
      const res = await axios.get(`/promise/schedule?date=${month}`);
      setData(res.data.data);
      console.log(res);
    } catch (err) {
      console.log("에러", err);
    }
  };

  useEffect(() => {
    fetchData(month);
  }, [prevMonth, nextMonth]);

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

  // const days = createMonth.map((item, i) => {
  //   const isCurrentMonth = isSameMonth(item, currentDate);

  //   return isCurrentMonth ? (
  //     <div
  //       className={styles.daysItem}
  //       key={i}
  //       onClick={() => handleModal(format(item, "yyyy-MM-dd"))}
  //     >
  //       {format(item, "d")}
  //       {/* <p>11시 모각코 | 강남역12번 출구 | 홍길동외 3명</p> */}
  //     </div>
  //   ) : (
  //     <div className={styles.daysItem_null} key={i}></div>
  //   );
  // });
  const days = createMonth.map((item, i) => {
    const isCurrentMonth = isSameMonth(item, currentDate);
    const hasEvent = data?.find((dataItem) => {
      const eventDate = new Date(dataItem.meetDates);
      return eventDate.toDateString() === item.toDateString();
    });

    return isCurrentMonth ? (
      hasEvent ? (
        <div
          className={styles.daysItem}
          key={i}
          onClick={() => handleModal(format(item, "yyyy-MM-dd"))}
        >
          {format(item, "d")}
          <p>
            {hasEvent.meetName} | {hasEvent.meetLocationName}
          </p>
        </div>
      ) : (
        <div className={styles.daysItem} key={i}>
          {format(item, "d")}
        </div>
      )
    ) : (
      <div className={styles.daysItem} key={i}></div>
    );
  });

  const handleModal = (day) => {
    if (!isModal) {
      setCalendarData(day);
      setIsModal(true);
    } else {
      setIsModal(false);
    }
  };

  return (
    <div>
      {isModal && <CalendarModal handleCloseModal={handleModal} />}
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
