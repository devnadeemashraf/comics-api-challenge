import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "..";
import { TComic } from "@/types/api-response";

type TRated = {
  [id: string]: TComic & {
    rating: number;
  };
};

interface ComicState {
  currentIndex: number;
  rated: TRated[] | null;
}

const initialState: ComicState = {
  currentIndex: 1,
  rated: null,
};

export const comicSlice = createSlice({
  name: "comic",
  initialState,
  reducers: {
    setCurrentIndex: (currentState, { payload }: { payload: number }) => {
      currentState.currentIndex = payload;
    },
    setRated: (currentState, { payload }: { payload: TRated[] }) => {
      currentState.rated = payload;
    },
  },
});

// export actions
export const { setCurrentIndex, setRated } = comicSlice.actions;

// export reducer
export default comicSlice.reducer;
