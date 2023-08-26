import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { tStarWarsReduxState } from './starWarsTypes';
import { initialStarWarsReduxState } from './starWarsInitialStates';
import { starWarsGetMainList } from './starWarsThunks';
import {
  starWarsBuildMainQuery,
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
    starWarsSetMainListKeyword: (
      state,
      action: PayloadAction<tStarWarsReduxState['mainListKeyword']>,
    ) => {
      // trim white space around the string
      const trimmedKeyword = action.payload.trim();
      // does not change keyword if the new one is the same as the previous one
      if (trimmedKeyword !== state.mainListKeyword) {
        // store keyword if send the same one, next time ignores the request
        state.mainListKeyword = trimmedKeyword;
        // build query to request data based on keyword
        state.mainListQuery = starWarsBuildMainQuery(trimmedKeyword);
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
        state.mainListPrevQuery = action.payload.prevQuery ?? '';
        state.mainListNextQuery = action.payload.nextQuery ?? '';
        const results: tStarWarsReduxState['mainList'] =
          action.payload.results.map((result) => ({
            name: result.name,
            gender: result.gender,
          }));
        // if previous page query exists, then push next in array
        state.mainList = state.mainListPrevQuery
          ? [...state.mainList, ...results]
          : results;
        // reorder list if more than 1 object in array
        if (state.mainList.length > 1 && state.mainListSort) {
          state.mainList = starWarsListReorder(
            state.mainList,
            state.mainListSort,
          );
        }
      })
      .addCase(starWarsGetMainList.rejected, (state) => {
        state.status = 'failed';
        const errorString = 'requestError';
        if (!state.mainListQuery.includes(errorString)) {
          // the main list query needed to be changed (cannot be empty string because that causes infinite loop) to load next button working correctly
          state.mainListQuery += `&${errorString}`;
        }
      });
  },
});

export const {
  starWarsSetMainListQuery,
  starWarsSetMainListKeyword,
  starWarsSetMainListSort,
} = starWarsSlice.actions;
export default starWarsSlice.reducer;
