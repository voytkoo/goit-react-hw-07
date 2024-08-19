import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContactsThunk,
  addContactsThunk,
  deleteContactsThunk,
} from "./contactsOps";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
