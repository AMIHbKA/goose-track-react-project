import styled from 'styled-components';
import { DatePicker as DatePickerCalendar } from '@mui/x-date-pickers/DatePicker';

export const DatePickerStyled = styled(DatePickerCalendar)`
  box-sizing: border-box;
  font-weight: 600;
  font-family: 'InterSemiBolt';
  font-size: 12px;
  line-height: calc((18 / 14) * 100%);
  outline: none;
  border-radius: 8px;
  transition: all 250ms;
      border-color: ${({ theme }) => theme.userAccount.border};
    border-width: 1px;
  &:hover .MuiOutlinedInput-root,
  &:focus .MuiOutlinedInput-root {
    border-color: ${({ theme }) => theme.userAccount.border};
    border-width: 1px;
  }

  & .MuiInputBase-input {
    padding: 0px 0px 0px 14px;
    font-size: 12px;
  line-height: calc((18 / 14) * 100%);
    height: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.userAccount.inputText};
  }
  .MuiOutlinedInput-root {
    outline: none;
    border: 1px groove ${({ theme }) => theme.userAccount.border};
    transition: ${({ theme }) => theme.defaultTransition};

    .MuiOutlinedInput-notchedOutline {
      border: none;
    }
  }

  .MuiInputBase-root {
    height: 42px;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
  }

  &. input::placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.userAccount.inputText};
    font-weight: 600;
    opacity: 1;
    outline: none; */
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 16px;
    }
  }

  & .MuiButtonBase-root {
    padding: 4px;
    stroke: #ffffff;
    margin: 0px 12px;
  }

  &.MuiFormControl-root {
    background-color: inherit;
  }

  & div input::placeholder {
    font-size: 12px;
    color: ${({ theme }) => theme.userAccount.inputText};
    font-weight: 800;
    opacity: 1;
    outline: none;
    @media (min-width: 768px) {
      font-size: 12px;
    }
  }

  @media (min-width: 768px) {
    width: 354px;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.12;

    && .MuiInputBase-root {
      height: 46px;
    }

    && .MuiInputBase-input {
      padding: 0px 0px 0px 18px;
      font-size: 12px;
      line-height: 1.12;
      height: 20px;
      font-weight: 600;
    }
  }
`;

export const PopperDateStyles = {
  '& .MuiDateCalendar-root': {
    height: '354px',
    fontFamily: 'Inter sans-serif',
  },
  '& .MuiPaper-root': {
    backgroundColor: '#3E85F3',
    borderRadius: '16px',
    position: 'absolute',
    top: '5px',
    left: '-10px',
    fontSize: '34px',
  },
  '& .MuiPickersCalendarHeader-root': {
    position: 'relative',
    justifyContent: 'center',
  },
  '& .MuiPickersCalendarHeader-labelContainer': {
    margin: 0,
    color: '#FFFFFF',
    fontSize: '20px',
    lineHeight: 1.2,
  },
  '& .MuiButtonBase-root.MuiIconButton-root.MuiPickersCalendarHeader-switchViewButton':
    { display: 'none' },
  '& .MuiPickersDay-root': {
    color: '#FFFFFF',
    fontWeight: 300,
    fontSize: '14px',
    lineHeight: 1.33,
    padding: '20px',
  },
  '& .MuiPickersArrowSwitcher-spacer': {
    display: 'none',
  },
  '& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeEnd.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button':
    {
      position: 'absolute',
      left: '35px',
      top: '9px',
      color: '#FFFFFF',
      width: '18px',
      height: '18px',
    },
  '& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeStart.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button':
    {
      position: 'absolute',
      top: '9px',
      right: '35px',
      color: '#FFFFFF',
      width: '18px',
      height: '18px',
    },
  '& .MuiDayCalendar-header': {
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  },
  '& .MuiTypography-root.MuiTypography-caption.MuiDayCalendar-weekDayLabel': {
    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: 1.28,
  },

  '& .MuiPickersYear-yearButton': {
    color: '#FFFFFF',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: 1.28,
  },
  '& .MuiPickersYear-yearButton.Mui-selected': {
    backgroundColor: '#FFFFFF',
    color: '#3E85F3',
    borderRadius: '24px',
  },
  '& .MuiPickersYear-yearButton.Mui-wekend': {
    opacity: '35%',
  },
  '& .MuiPickersYear-yearButton.Mui-today.Mui-selected': {
    backgroundColor: '#FFFFFF',
    color: '#3E85F3',
    borderRadius: '24px',
    border: 'none',
  },
  '& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected': {
    backgroundColor: '#FFFFFF',
    color: '#3E85F3',
    borderRadius: '24px',
    width: '32px',
    height: '32px',
  },
  '& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected.MuiPickersDay-dayWithMargin.MuiPickersDay-today':
    {
      fill: '#FFFFFF',
      backgroundColor: '#FFFFFF',
      color: '#3E85F3',
      borderRadius: '24px',
      width: '32px',
      height: '32px',
    },
  '@media (min-width: 768px)': {
    '& .MuiDateCalendar-root': {
      width: '337px',
      minHeight: '354px',
    },
    '& .MuiPaper-root': {
      padding: '15px 18px',
      scroll: 'none',
      position: 'absolute',
      top: '5px',
      left: '-10px',
    },
    '& .MuiPickersCalendarHeader-labelContainer': {
      fontSize: '24px',
      lineHeight: 1.17,
    },
    '& .MuiTypography-root.MuiTypography-caption.MuiDayCalendar-weekDayLabel': {
      fontSize: '18px',
      lineHeight: 1.33,
      padding: '22px',
    },
    '& .MuiPickersYear-yearButton': {
      fontSize: '18px',
      lineHeight: 1.33,
    },
    '& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeEnd.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button':
      {
        left: '55px',
        top: '9px',
      },
    '& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeStart.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button':
      {
        top: '9px',
        right: '55px',
      },
    '& .MuiPickersDay-root': {
      color: '#FFFFFF',
      fontWeight: 300,
      fontSize: '18px',
      lineHeight: 1.33,
      padding: '22px',
    },
  },
  '@media (min-width: 1440px)': {
    '& .MuiDateCalendar-root': {
      width: '337px',
      minHeight: '334px',
    },
    '& .MuiPaper-root': {
      padding: '15px 18px',
      scroll: 'none',
      position: 'absolute',
      top: '-190px',
      left: '190px',
    },
    '& .MuiPickersCalendarHeader-labelContainer': {
      fontSize: '24px',
      lineHeight: 1.17,
    },
    '& .MuiTypography-root.MuiTypography-caption.MuiDayCalendar-weekDayLabel': {
      fontSize: '18px',
      lineHeight: 1.33,
    },
    '& .MuiDayCalendar-weekend': { opacity: '35%' },
    '& .MuiPickersYear-yearButton': {
      fontSize: '18px',
      lineHeight: 1.33,
    },
    '& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeEnd.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button':
      {
        left: '55px',
        top: '9px',
      },
    '& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeStart.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button':
      {
        top: '9px',
        right: '55px',
      },
  },
};