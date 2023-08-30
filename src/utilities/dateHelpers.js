const getDayOfWeek = isoDate => {
  const date = new Date(isoDate);
  return date.getDay();
};

export const trimCalendarDates = calendarDates => {
  let startIdx = 0;

  for (let i = 0; i < calendarDates.length; i++) {
    const obj = calendarDates[i];

    if (obj.type === 'current') {
      if (getDayOfWeek(obj.iso) === 1) {
        startIdx = i;

        break;
      }

      for (let j = i - 1; j >= 0; j--) {
        if (
          calendarDates[j].type === 'previous' &&
          getDayOfWeek(calendarDates[j].iso) === 1
        ) {
          startIdx = j;

          break;
        }
      }

      break;
    }
  }

  return calendarDates.slice(startIdx, startIdx + 35);
};

export const getDateFromMonthString = monthString => {
  const [monthStr, yearStr] = monthString.split(' ');

  const monthNumber = new Date(Date.parse(`${monthStr} 1, 2023`)).getMonth();

  const year = parseInt(yearStr);

  const date = new Date(year, monthNumber);

  return date;
};
