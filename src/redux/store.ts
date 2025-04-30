// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Ensure this path is correct

export const store = configureStore({
    reducer: {
        auth: userReducer, // Ensure this matches your slice
    },
});