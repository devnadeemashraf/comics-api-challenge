import { configureStore } from "@reduxjs/toolkit";

import comicReducer from "./slice/comicsSlice";

export const store = configureStore({
  reducer: {
    comic: comicReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// export selectors
export const selectComics = (state: RootState) => state.comic;
