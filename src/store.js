import { configureStore, createSlice } from '@reduxjs/toolkit';

const BOOK_STORAGE_KEY = 'myApp.books';

const addedBooks = createSlice({
    name: "book",
    initialState: getBooksFromStorage(),
    reducers: {
        addBook(state, action) {
        state.push(action.payload);
        saveBooksToStorage(state);
        },
        removeBook(state, action) {
        const index = state.findIndex((book) => book.itemId === action.payload);
        if (index !== -1) {
            state.splice(index, 1);
            saveBooksToStorage(state);
        }
        },
    },
});

function getBooksFromStorage() {
    const booksJSON = localStorage.getItem(BOOK_STORAGE_KEY);
    return booksJSON ? JSON.parse(booksJSON) : [];
}

function saveBooksToStorage(books) {
    localStorage.setItem(BOOK_STORAGE_KEY, JSON.stringify(books));
}

export const { addBook, removeBook } = addedBooks.actions;

export default configureStore({
    reducer: {
        book: addedBooks.reducer,
    },
});
