import React from 'react';
import ChoosedMonthContainer from './ChoosedMonthContainer/ChoosedMonthContainer';
import ChoosedMonthCell from './ChoosedMonthCell/ChoosedMonthCell';

const ChoosedMonth = () => {
  return (
    <ChoosedMonthContainer>
      {Array.from({ length: 35 }, (_, i) => i + 1).map(item => (
        <ChoosedMonthCell key={item} />
      ))}
    </ChoosedMonthContainer>
  );
};

export default ChoosedMonth;
