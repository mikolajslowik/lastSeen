import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Timer from "./Timer";

export default function LastSeenCounter() {
  const [startDate, setStartDate] = useState(new Date());

  const lastSeen = new Date(startDate).getTime();

  const filterFutureTime = (time: any) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() > selectedDate.getTime();
  };

  console.log("startDate", startDate);
  return (
    <div className="LastSeenCounter">
      <DatePicker
        dateFormat="MMMM d, yyyy h:mm:ss aa"
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm:ss"
        timeIntervals={15}
        maxDate={new Date()}
        filterTime={filterFutureTime}
      />
      <Timer lastSeen={lastSeen} />
    </div>
  );
}
