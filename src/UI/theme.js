const LIGHT_BLUE = '#e3f3ff';
const LIGHT_COLOR = '#fff';
const LIGHT_GREY = 'rgb(250 250 250 / 0.3)';
const DARK_GREY = 'rgb(52 52 52 / 0.5)';
const DARK_COLOR = '#343434';
const DARK_GRAYISH_BLUE = '#21222c';
const LIGHT_GRAYISH_BLUE = 'rgb(220 227 229 / 0.8)';

const commonStyles = {
  breakpoints: {
    s: '320px',
    preM: '374px',
    m: '375px',
    preL: '549px',
    l: '550px',
    preTablet: '767px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    laptopXl: '2560px',
  },
  colors: {
    primary: '#3e85f3',
    choosenStar: '#ffac33',
    lowPriority: '#72c2f8',
    mediumPrioroty: '#f3b249',
    highPriority: '#ea3d65',
    lowPriorityBack: '#ceeefd',
    mediumPriorotyBack: '#fcf0d4',
    highPriorityBack: '#ffd2dd',
    monthDayButtonBorder: 'rgb(62 133 243 / 0.2)',
    hoverState: '#2b78ef',
  },
};

export const darkTheme = {
  ...commonStyles,
  colors: {
    ...commonStyles.colors,
    mainBack: '#171820',
    secondBack: DARK_GRAYISH_BLUE,
    border: 'rgb(255 255 255 / 0.15)',
    closeButton: LIGHT_COLOR,
    mainText: LIGHT_COLOR,
    secondText: LIGHT_GREY,
    textAreaBack: LIGHT_GREY,
    emptyStar: '#353647',
    userPanelLabel: LIGHT_GREY,
    userPanelMainText: LIGHT_COLOR,
    userPanelActiveText: LIGHT_COLOR,
    userPanelActiveBack: commonStyles.colors.primary,
    addTaskBack: commonStyles.colors.primary,
  },
  calendarToolBar: {
    buttonBackground: DARK_GRAYISH_BLUE,
    activeButtonBackground: commonStyles.colors.primary,
    buttonDefaultText: commonStyles.colors.primary,
    buttonActiveText: LIGHT_COLOR,
    iconBackground: DARK_GRAYISH_BLUE,
    iconInactive: 'rgb(255 255 255 / 0.15)',
  },
  choosedMonth: {
    borderColor: 'rgb(255 255 255 / 0.15)',
    dateBackground: '#22232D',
    todayBadgeTextColor: '#22232D',
  },
  choosedDay: {
    addBtnBackground: commonStyles.colors.primary,
    addBtnBorder: null,
  },
  statistics: {
    linesColor: 'rgb(227 243 255 / 0.15)',
    linesWidth: '0.8px',
    borderColor: LIGHT_BLUE,
    backgroundColor: DARK_GRAYISH_BLUE,
    chartTextColor: LIGHT_COLOR,
    warningMessageColor: commonStyles.colors.highPriorityBack,
  },
  feedbackModal: {
    backgroundColor: '#13151a',
    buttonColor: '#fff',
    backgroundButtonSecondaryColor: '#353647',
    backgroundButtonPrimaryColor: '#3e85f3',
    colorTitle: 'rgb(250 250 250 / 0.3)',
    borderColor: 'rgb(255 255 255 / 0.15)',
    textColor: '#fff',
    backgroundButton: '#21222c',
    starColor: '#ffac33',
    starColorDefault: '#353647',
  },
  addTaskModal: {
    background: '#171820',
    border: '1px solid rgba(255 255 255 / 0.15)',
    inputBorder: '1px solid rgba(255 255 255 / 0.15)',
    inputBackground: '#171820',
  },
};

export const lightTheme = {
  ...commonStyles,
  colors: {
    ...commonStyles.colors,
    mainBack: '#f7f6f9',
    secondBack: LIGHT_COLOR,
    border: LIGHT_GRAYISH_BLUE,
    closeButton: '#111111',
    mainText: DARK_COLOR,
    secondText: LIGHT_GREY,
    textAreaBack: '#f6f6f6',
    emptyStar: '#cec9c1',
    userPanelLabel: DARK_GREY,
    userPanelMainText: DARK_GREY,
    userPanelActiveText: commonStyles.colors.primary,
    userPanelActiveBack: LIGHT_BLUE,
    addTaskBack: LIGHT_BLUE,
  },
  calendarToolBar: {
    buttonBackground: LIGHT_BLUE,
    activeButtonBackground: '#cae8ff',
    buttonDefaultText: commonStyles.colors.primary,
    buttonActiveText: commonStyles.colors.primary,
    iconBackground: LIGHT_COLOR,
    iconInactive: LIGHT_GRAYISH_BLUE,
  },
  choosedMonth: {
    borderColor: 'rgba(220, 227, 229, 0.5)',
    dateBackground: LIGHT_COLOR,
    todayBadgeTextColor: LIGHT_COLOR,
  },
  choosedDay: {
    addBtnBackground: LIGHT_BLUE,
    addBtnBorder: `1px dashed ${commonStyles.colors.primary}`,
  },
  statistics: {
    linesColor: LIGHT_BLUE,
    linesWidth: '1px',
    backgroundColor: LIGHT_COLOR,
    chartTextColor: DARK_COLOR,
    warningMessageColor: commonStyles.colors.highPriority,
  },
  feedbackModal: {
    backgroundColor: '#ffffff',
    buttonColor: '#fff',
    backgroundButtonSecondaryColor: '#e3f3ff',
    backgroundButtonPrimaryColor: '#3e85f3',
    borderColor: 'ffffff',
    colorTitle: 'rgb(52 52 52 / 0.8)',
    textColor: '#343434',
    backgroundButton: ' #e5edfa',
    starColor: '#ffac33',
    starColorDefault: '#cec9c1',
  },
  addTaskModal: {
    background: '#fff',
    border: '1px solid rgba(220 227 229 / 0.80)',
    inputBorder: '0px',
    inputBackground: '#F6F6F6',
  },
};
