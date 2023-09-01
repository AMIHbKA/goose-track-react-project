
import { ActionBox, IconLeft, IconRight, Wrapper } from './PeriodPaginator.styled';

import { VerticalDash } from 'UI/icons';
import { DAY, MONTH, NEXT, PREVIOUS } from 'components/CalendarToolbar/CalendarToolbar';
import { ButtonDatePicker } from 'components/DatePicker/DatePicker';
import { useState } from 'react';
import { useEffect } from 'react';

export const formatDate =(currDate, periodType) => {

  if (periodType === MONTH) {
    const formattedDate = new Date(currDate)
    .toLocaleString('en-US', { month: 'long', year: 'numeric' })
    .toUpperCase()
    
    return formattedDate;
  } else if (periodType === DAY) {
    const formattedDate= `${new Date(currDate).getDate()} ${new Date(currDate)
      .toLocaleString('en-US', { month: "short", year: 'numeric' })
      .toUpperCase()}`
    return formattedDate;
  }
  
}

export const PeriodPaginator = ({date, periodType, changeDate }) => {
 const [value, setValue] = useState(date);

 useEffect(()=> {
  setValue(date)
 }, [date])


  return (
    <Wrapper>
      <ButtonDatePicker
          label={formatDate(value, periodType)}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          
        />
      
      <ActionBox>
        <IconLeft size={18} onClick={()=>changeDate(PREVIOUS)
        }/>
        <VerticalDash/>
        <IconRight size={18} onClick={()=>changeDate(NEXT)}/>
      </ActionBox>
    </Wrapper>
  );
};
