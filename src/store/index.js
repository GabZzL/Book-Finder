import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./ui";
import booksReducer from "./books";

const store = configureStore({
  reducer: { ui: uiReducer, books: booksReducer },
});

export default store;
