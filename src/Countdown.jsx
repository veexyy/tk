import React, { useState, useEffect } from 'react';

const TimeInterval = ({ interval, timeLeft }) => {
  if (!timeLeft[interval]) {
    return null;
  }

  return (
    <span className={`${interval}-interval`}>
      <span className='num'>{timeLeft[interval]}</span>
      <span className='countdown-text'>{interval}</span>
    </span>
  );
};

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        дней: Math.floor(difference / (1000 * 60 * 60 * 24)),
        часов: Math.floor((difference / (1000 * 60 * 60)) % 24),
        минут: Math.floor((difference / 1000 / 60) % 60),
        секунд: Math.floor((difference / 1000) % 60)
      };
    } else {
      return <>Все закончилось!</>;
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="timer">
      <TimeInterval interval="дней" timeLeft={timeLeft} />
      <TimeInterval interval="часов" timeLeft={timeLeft} />
      <TimeInterval interval="минут" timeLeft={timeLeft} />
      <TimeInterval interval="секунд" timeLeft={timeLeft} />
    </div>
  );
};

export default Countdown;