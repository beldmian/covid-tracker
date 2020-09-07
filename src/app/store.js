import { configureStore } from '@reduxjs/toolkit';
import covidReducer from '../features/covid/covidSlice';

export default configureStore({
  reducer: {
    covid: covidReducer,
  },
});
