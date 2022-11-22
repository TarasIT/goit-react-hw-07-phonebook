import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const extraActions = [fetchContacts, addContact, deleteContact];

const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fetchContactsWithSuccess = (state, action) => {
  state.items = action.payload;
};

const addContactsWithSuccess = (state, action) => {
  state.items.push(action.payload);
};

const deleteContacts = (state, action) => {
  state.items = state.items.filter(({ id }) => id !== action.payload.id);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsWithSuccess)
      .addCase(addContact.fulfilled, addContactsWithSuccess)
      .addCase(deleteContact.fulfilled, deleteContacts)
      .addMatcher(getActions('pending'), handlePending)
      .addMatcher(getActions('fulfilled'), handleFulfilled)
      .addMatcher(getActions('rejected'), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
