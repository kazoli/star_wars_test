import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { tStarWarsReduxState } from './starWarsTypes';
import { initialStarWarsReduxState } from './starWarsInitialStates';
import { starWarsGetMainList } from './starWarsThunks';

// Star Wars reducers and extra reducers
const starWarsSlice = createSlice({
  name: 'starWars',
  initialState: initialStarWarsReduxState,
  reducers: {
    starWarsSetMainListQuery: (
      state,
      action: PayloadAction<tStarWarsReduxState['mainListQuery']>,
    ) => {
      state.mainListQuery = action.payload;
    },
    starWarsSetMainListKeywords: (
      state,
      action: PayloadAction<tStarWarsReduxState['mainListKeywords']>,
    ) => {
      // if keywords changes, page is set back to 1st one
      state.mainListPage = 1;
      // remove leading and trailing white spaces
      state.mainListKeywords = action.payload.trim();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(starWarsGetMainList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(starWarsGetMainList.fulfilled, (state, action) => {
        state.status = 'idle';
      })
      .addCase(starWarsGetMainList.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { starWarsSetMainListQuery, starWarsSetMainListKeywords } =
  starWarsSlice.actions;
export default starWarsSlice.reducer;
