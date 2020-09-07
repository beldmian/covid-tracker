import { createSlice } from '@reduxjs/toolkit'

export const covidSlice = createSlice({
  name: 'covid',
  initialState: {
    value: {}
  },
  reducers: {
    setCovidData: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setCovidData } = covidSlice.actions;

export const fetchCovid = () => dispatch => {
  fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(json => dispatch(setCovidData(json)))
}

export const selectCovid = state => state.covid.value;

export default covidSlice.reducer;
