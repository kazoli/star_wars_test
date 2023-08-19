import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { tStarWarsReduxState } from './starWarsTypes';
import { initialStarWarsReduxState } from './starWarsInitialStates';
import { starWarsGetMainList } from './starWarsThunks';
import {
  starWarsbuildMainQuery,
  starWarsListReorder,
} from './starWarsMiddlewares';

// Star Wars reducers and extra reducers
const starWarsSlice = createSlice({
  name: 'starWars',
  initialState: initialStarWarsReduxState,
  reducers: {
    starWarsSetMainListQuery: (
      state,
      action: PayloadAction<tStarWarsReduxState['mainListQuery']>,
    ) => {
      state.status = 'loading';
      state.mainListQuery = action.payload;
    },
    starWarsSetMainListKeywords: (
      state,
      action: PayloadAction<tStarWarsReduxState['mainListKeywords']>,
    ) => {
      // trim white space around the string
      const trimmedKeywords = action.payload.trim();
      // does not change keywords is the new one is same as the previous one
      if (trimmedKeywords !== state.mainListKeywords) {
        // store keywords if next time send the same ignore request
        state.mainListKeywords = action.payload;
        // build query to request data with keywords
        state.mainListQuery = starWarsbuildMainQuery(action.payload);
      }
    },
    starWarsSetMainListSort: (
      state,
      action: PayloadAction<tStarWarsReduxState['mainListSort']>,
    ) => {
      // store sort in state
      state.mainListSort = action.payload;
      // reorder list
      if (state.mainListSort) {
        state.mainList = starWarsListReorder(
          state.mainList,
          state.mainListSort,
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(starWarsGetMainList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(starWarsGetMainList.fulfilled, (state, action) => {
        state.status = 'idle';
        state.mainListTotalResults = action.payload.count;
        state.mainListNextQuery = action.payload.nextQuery ?? '';
        const results: tStarWarsReduxState['mainList'] =
          action.payload.results.map((result) => ({
            name: result.name,
            gender: result.gender,
          }));
        state.mainList = [...state.mainList, ...results];
        // reorder list
        if (state.mainListSort) {
          state.mainList = starWarsListReorder(
            state.mainList,
            state.mainListSort,
          );
        }
      })
      .addCase(starWarsGetMainList.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const {
  starWarsSetMainListQuery,
  starWarsSetMainListKeywords,
  starWarsSetMainListSort,
} = starWarsSlice.actions;
export default starWarsSlice.reducer;
