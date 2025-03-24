"use client";

import { useEffect, useState } from "react";
import "./Timer.scss";

interface TimerProps {
  initialHours: number;
  initialMinutes: number;
  initialSeconds: number;
}

const Timer = ({
  initialHours,
  initialMinutes,
  initialSeconds,
}: TimerProps) => {
  const [time, setTime] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (
          prevTime.hours === 0 &&
          prevTime.minutes === 0 &&
          prevTime.seconds === 0
        ) {
          clearInterval(timer);
          return prevTime;
        }

        let newSeconds = prevTime.seconds - 1;
        let newMinutes = prevTime.minutes;
        let newHours = prevTime.hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timer">
      {String(time.hours).padStart(2, "0")}h
      {String(time.minutes).padStart(2, "0")}m
      {String(time.seconds).padStart(2, "0")}s
    </div>
  );
};

export default Timer;
