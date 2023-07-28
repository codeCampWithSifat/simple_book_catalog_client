import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../../types/bookTypes";

interface IWishList {
  books: IBook[];
}

const initialState: IWishList = {
  books: [],
};

const bookWishListSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<IBook>) => {
      state.books.push(action.payload);
    },
  },
});
export const { addToWishList } = bookWishListSlice.actions;
export default bookWishListSlice.reducer;
