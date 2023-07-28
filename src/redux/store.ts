import { configureStore } from "@reduxjs/toolkit";
import { api } from "./feature/book/bookSlice";
import userReducer from "./feature/user/userSlice";
import bookReducer from "./feature/book/bookwishListSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
