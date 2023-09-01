const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  theme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toogleTheme: state => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toogleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
