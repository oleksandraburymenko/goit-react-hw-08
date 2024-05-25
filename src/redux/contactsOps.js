import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://663fb2a3e3a7c3218a4dc72e.mockapi.io/";

export const fetchContacts = createAsyncThunk(
    "fetchAllContacts", 
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    
});

export const addContact = createAsyncThunk(
    "addContact",
    async (newContact, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", newContact);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);