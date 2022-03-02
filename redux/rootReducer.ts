import { combineReducers } from '@reduxjs/toolkit';
import siteSlice from '../redux/site.slice';

const rootReducer = combineReducers({
  site: siteSlice.reducer,
});

export default rootReducer;
