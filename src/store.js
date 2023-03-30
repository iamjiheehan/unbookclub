import { configureStore , createSlice} from '@reduxjs/toolkit'

let addedBooks = createSlice({
    name: 'book',
    initialState: ["취업하자"],
    reducers: {
        addBook(state, action){
            state.push(action.payload)
        }
    }
})

export let {addBook} = addedBooks.actions;

export default configureStore({
    reducer: { 
        book: addedBooks.reducer
    }
}) 