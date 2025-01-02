import { createSlice } from "@reduxjs/toolkit";

const booksInitialState = {
  booksList: [],
  selectedBook: null,
  searchTerms: null,
};

const bookSlice = createSlice({
  name: "books",
  initialState: booksInitialState,
  reducers: {
    setSearchTerms(state, action) {
      state.searchTerms = action.payload;
    },
    setBooks(state, action) {
      state.booksList = action.payload;
    },
    setSelectedBook(state, action) {
      state.selectedBook = action.payload;
    },
  },
});

export const booksActions = bookSlice.actions;
export default bookSlice.reducer;
