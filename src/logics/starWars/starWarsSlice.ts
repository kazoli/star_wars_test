import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { tStarWarsReduxState } from './starWarsTypes';
import { initialStarWarsReduxState } from './starWarsInitialStates';
import { starWarsGetMainList } from './starWarsThunks';
import { buildMainQuery } from './starWarsMiddlewares';

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
      // store keywords if next time send the same ignore request
      state.mainListKeywords = action.payload;
      // build query to request data with keywords
      state.mainListQuery = buildMainQuery(action.payload);
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
        const results: tStarWarsReduxState['mainList'] =
          action.payload.results.map((result) => ({
            name: result.name,
          }));
        state.mainList = [...state.mainList, ...results];
      })
      .addCase(starWarsGetMainList.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { starWarsSetMainListQuery, starWarsSetMainListKeywords } =
  starWarsSlice.actions;
export default starWarsSlice.reducer;
