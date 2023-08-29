import React from 'react';
import ChoosedMonthContainer from './ChoosedMonthContainer/ChoosedMonthContainer';

export const ChoosedMonth = () => {
  return (
    <ChoosedMonthContainer>
      {Array.from({ length: 35 }, (_, i) => i + 1).map(item => (
        <div key={item}></div>
      ))}
    </ChoosedMonthContainer>
  );
};
