import React, { useEffect, useState } from "react";

interface ExperienceTimerProps {
  startDate: string;
  className?: string;
  textPrefix?: string; // Ex: 'Atuando há' ou 'Working for'
  textYear?: string;   // Ex: 'ano'/'anos' ou 'year'/'years'
  textAnd?: string;    // Ex: 'e' ou 'and'
  textDay?: string;    // Ex: 'dia'/'dias' ou 'day'/'days'
  textSuffix?: string; // Ex: 'com tecnologia.' ou 'with technology.'
}

export const ExperienceTimer: React.FC<ExperienceTimerProps> = ({
  startDate,
  className,
  textPrefix = 'Atuando há',
  textYear = 'ano',
  textAnd = 'e',
  textDay = 'dia',
  textSuffix = 'com tecnologia.'
}) => {
  const [years, setYears] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const update = () => {
      const start = new Date(startDate);
      const now = new Date();
      const diffMs = now.getTime() - start.getTime();
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const years = Math.floor(diffDays / 365.25);
      const days = diffDays - Math.floor(years * 365.25);
      setYears(years);
      setDays(days);
    };
    update();
    const interval = setInterval(update, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className={className} >
      <span>
        <span role="img" aria-label="timer">⏳ </span>
        {textPrefix + ' '}
        <b>{years}</b> {years === 1 ? textYear : textYear + 's'}
        {' ' + textAnd + ' '}
        <b>{days}</b> {days === 1 ? textDay : textDay + 's'} {textSuffix}
      </span>
    </div>
  );
};

export default ExperienceTimer;
