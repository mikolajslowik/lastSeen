import { useEffect, useState } from "react";
import { TimerProps } from "../interfaces";

export default function Timer(props: TimerProps) {
  const [time, setTime] = useState(0);

  const differenceInSeconds = () =>
    Math.floor((new Date().getTime() - props.lastSeen) / 1000);

  useEffect(() => {
    const interval = setInterval(() => setTime(differenceInSeconds), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);
  return (
    <div className="Timer">
      {time < 60
        ? time <= 1
          ? `${time} second ago`
          : `${time} seconds ago`
        : Math.floor(time / 60) === 1
        ? `${Math.floor(time / 60)} minute ago`
        : `${Math.floor(time / 60)} minutes ago`}
    </div>
  );
}
