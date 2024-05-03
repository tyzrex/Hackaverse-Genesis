import React, { useEffect, useState } from "react";

interface Event {
  date: Date;
}

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<{ event: Event }> = ({ event }) => {
  const calculateCountdown = (): Countdown => {
    const now = new Date().getTime();
    const eventTime = event.date.getTime();
    const difference = eventTime - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const formatNumber = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  const [countdown, setCountdown] = useState<Countdown>(calculateCountdown());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => clearInterval(interval);
  }, [event]);

  return (
    <div className="text-white font-secondary p-4 rounded-md">
      <div className="flex justify-center items-center gap-16 flex-wrap">
        <div className="flex flex-col items-center">
          <span className="text-[24px] sm:text-[32px] md:text-[48px] lg:text-[72px] font-bold">
            {formatNumber(countdown.days)}
          </span>
          <span className="text-[#B333D9] text-[18px] font-medium">Days</span>
        </div>
        <div className="flex flex-col items-center ">
          <span className="text-[24px] sm:text-[32px] md:text-[48px] lg:text-[72px] font-bold">
            {formatNumber(countdown.hours)}
          </span>
          <span className="text-[#B333D9] text-[18px] font-medium">Hours</span>
        </div>
        <div className="flex flex-col items-center ">
          <span className="text-[24px] sm:text-[32px] md:text-[48px] lg:text-[72px] font-bold">
            {formatNumber(countdown.minutes)}
          </span>
          <span className="text-[#B333D9] text-[18px] font-medium">
            Minutes
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[24px] sm:text-[32px] md:text-[48px] lg:text-[72px] font-bold">
            {formatNumber(countdown.seconds)}
          </span>
          <span className="text-[#B333D9] text-[18px] font-medium">
            Seconds
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
