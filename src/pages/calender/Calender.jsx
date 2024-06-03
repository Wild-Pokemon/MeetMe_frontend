import { useState } from "react";
import { getYear, getMonth, getDate, getDay } from "date-fns";

function Calender() {
  const [currentData, setCurrentData] = useState(new Date());
  const year = getYear(currentData);
  const month = getMonth(currentData);
  console.log(year);

  const week = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <div>
      {year}년{month}월
    </div>
  );
}

export default Calender;
