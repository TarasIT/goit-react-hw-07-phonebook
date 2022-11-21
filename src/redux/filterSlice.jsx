import { createSlice } from '@reduxjs/toolkit';

// const filterInitialState = { filter: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    filterContacts: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
