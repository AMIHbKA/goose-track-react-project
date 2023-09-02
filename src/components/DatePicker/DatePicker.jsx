import { useEffect, useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, Text } from 'components/PeriodPaginator/PeriodPaginator.styled';
import { pickersLayoutClasses } from '@mui/x-date-pickers';
import { setDefaultOptions } from 'date-fns';
import { enGB } from 'date-fns/locale';

setDefaultOptions({ locale: enGB });

function ButtonField(props) {
  const {
    setOpen,
    label,
    id,
    disabled,
    InputProps: { ref } = {},
    inputProps: { 'aria-label': ariaLabel } = {},
  } = props;

  return (
    <Box
      variant="outlined"
      id={id}
      disabled={disabled}
      ref={ref}
      aria-label={ariaLabel}
      onClick={() => setOpen?.(prev => !prev)}
    >
      <Text>{label ?? 'Pick a date'}</Text>
    </Box>
  );
}

// function CustomDay( {day, props} ) {
//   console.log(day)
//   if (isWeekend(new Date(day).toDateString())) {
//     console.log("weekend")
//     return <PickersDay {...props}/>
//   }
//   return <PickersDay {...props} />;

// }

const DesktopSlotProps = {
  '& .MuiDateCalendar-root': {
    width: '373px',
    height: '354px',
    position: 'absolute',
    top: '16px',
    backgroundColor: '#3e85f3',
    borderRadius: '16px',
    color: '#fff',
  },

  '& .MuiPickersCalendarHeader-root': {
    fontWeight: 600,
    paddingLeft: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    marginBottom: '0px',
  },

  '.MuiPickersCalendarHeader-root::first-of-type': {
    order: 0,
    paddingRight: '20px',
    paddingLeft: '20px',
  },

  '& .MuiPickersCalendarHeader-labelContainer': {
    fontSize: '24px',
    fontWeight: 600,
    fontFamily: 'Inter',
  },

  '.MuiPickersArrowSwitcher-root': {
    display: 'inline-flex',
  },

  '& .MuiPickersCalendarHeader-switchViewButton': {
    display: 'none',
  },

  '.MuiPickersCalendarHeader-label': {
    textAlign: 'center',
    marginRight: '0px',
  },

  '.MuiPickersArrowSwitcher-spacer': {
    width: '290px',
  },

  '.css-31ca4x-MuiPickersFadeTransitionGroup-root': {
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    textAlign: 'center',
  },

  '& .MuiDayCalendar-weekDayLabel': {
    width: '48px',
    height: '48px',
    color: '#fff',
    fontSize: '18px',
    fontWeight: 600,
    fontFamily: 'Inter',
    margin: '0px',
    borderBottom: '1px solid rgb(250 250 250 / 0.3)',
  },

  '& .MuiDayCalendar-weekContainer': {
    padding: '0px',
  },

  // '& .MuiDayCalendar-weekContainer::last-child': {
  //   color: "rgb(250 250 250 / 0.3)",
  // },

  '& .MuiPickersDay-root': {
    width: '48px',
    height: '44px',
    color: '#fff',
    fontFamily: 'Inter',
    fontSize: '18px',
    fontWeight: 400,
    margin: '0px',
  },

  '& .MuiPickersDay-root[0]': {
    color: 'rgb(250 250 250 / 0.3)',
  },

  '& .Mui-selected': {
    backgroundColor: '#fff',
    color: '#3e85f3',
  },

  '& .Mui-selected:hover': {
    backgroundColor: '#fff',
    color: '#3e85f3',
  },

  '& .Mui-selected:focus': {
    backgroundColor: '#fff',
    color: '#3e85f3',
  },

  '& .MuiPickersArrowSwitcher-button': {
    color: '#DCE3E5CC',
    paddingRight: '7px',
  },

  '& .MuiPickersArrowSwitcher-button:hover': {
    color: '#fff',
  },
};

const mobileSlotProps = {
  '& .MuiDateCalendar-root': {
    width: '327px',
    height: 'auto',
    position: 'absolute',
    top: '16px',
    backgroundColor: '#3e85f3',
    borderRadius: '16px',
    color: '#fff',
  },
  '& .MuiPickersCalendarHeader-labelContainer': {
    fontSize: '20px',
    fontWeight: 600,
    fontFamily: 'Inter',
  },
  '.MuiPickersArrowSwitcher-spacer': {
    width: '265px',
  },
  '& .MuiDayCalendar-weekDayLabel': {
    fontSize: '14px',
    width: '48px',
    height: '44px',
    color: '#fff',
    margin: '0px',
    fontWeight: 600,
    fontFamily: 'Inter',
    borderBottom: '1px solid rgb(250 250 250 / 0.3)',
  },
  '& .MuiPickersDay-root': {
    fontSize: '14px',
    width: '48px',
    height: '44px',
    color: '#fff',
    fontFamily: 'Inter',
    fontWeight: 400,
    margin: '0px',
  },
};

export function ButtonDatePicker(props) {
  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);

  function getWindowWidth() {
    return window.innerWidth;
  }

  useEffect(() => {
    setWindowWidth(getWindowWidth());

    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slotProps = {
    layout: {
      sx: {
        [`.${pickersLayoutClasses.contentWrapper}`]:
          windowWidth < 768
            ? { ...DesktopSlotProps, ...mobileSlotProps }
            : { ...DesktopSlotProps },
      },
    },
  };

  // const CustomPickersDay = styled(PickersDay, {
  //   shouldForwardProp: (prop) =>
  //     isWeekend(prop),
  // })(({ isWeekend }) => ({
  //   ...(isWeekend && {
  //     color: "blue",
  //   }),
  // }));

  // function Day(props) {
  //   const { day, ...other } = props;

  //   if (isWeekend(day)) {
  //     return <CustomPickersDay day={day} {...other} />;
  //   }
  //   return <PickersDay day={day} {...other} />
  // }

  return (
    <DatePicker
      slots={{
        field: ButtonField,
        // day: Day,

        ...props.slots,
      }}
      slotProps={{
        field: { setOpen },

        ...slotProps,
      }}
      {...props}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    />
  );
}
