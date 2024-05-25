import { createSlice, createSelector } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectValueFilters } from "./filtersSlice";

const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: false,
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchContacts.rejected, (state) => {
                state.error = true;
                state.loading = false;
            })
            .addCase(addContact.pending, (state) => {
                state.error = false;
                state.loading = true;
            })
            .addCase(addContact.fulfilled, (state,  action) => {
                state.items.push(action.payload);
                state.loading = false;
            })
            .addCase(addContact.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(deleteContact.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(
                  (item) => item.id !== action.payload.id
                );
                state.loading = false;
            })
            .addCase(deleteContact.rejected, (state) => {
                state.error = true;
                state.loading = false;
            }),
});

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;


export const selectFilteredContacts  = createSelector(
  [selectContacts, selectValueFilters],
  (contacts, valueFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(valueFilter.toLowerCase())
    );
  }
);


export default slice.reducer;