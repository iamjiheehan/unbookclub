import { configureStore, createSlice } from '@reduxjs/toolkit';

const addedBooks = createSlice({
    name: "book",
    initialState: [],
    reducers: {
    addBook(state, action) {
        state.push(action.payload);
    },
    removeBook(state, action) {
        const index = state.find((book) => book.itemId === action.payload);
        if (index !== -1) {
            state.splice(index, 1);
        }
        },
    },
});

export const { addBook, removeBook } = addedBooks.actions;

export default configureStore({
    reducer: {
        book: addedBooks.reducer,
    },
});
