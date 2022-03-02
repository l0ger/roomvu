import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, Theme } from '../types';

const siteInitialState = {
  theme: 'light' as Theme,
};

const siteSlice = createSlice({
  name: 'site',
  initialState: siteInitialState,
  reducers: {
    theme: (state, payloadAction: PayloadAction<{ theme: Theme }>) => {
      state.theme = payloadAction.payload.theme;
      return state;
    },
  },
});

export const themeSelector = (state: AppState) => state.site.theme;

export const { theme: setThemeAction } = siteSlice.actions;

export default siteSlice;
