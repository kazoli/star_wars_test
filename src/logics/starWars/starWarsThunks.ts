import { createAsyncThunk } from '@reduxjs/toolkit';
import { tStarWarsReduxState } from './starWarsTypes';
import { errorHandler } from '../general/error';
import axios from 'axios';

// Get data of main list
export const starWarsGetMainList = createAsyncThunk<
  {
    count: tStarWarsReduxState['mainListTotalResults'];
    prevQuery: tStarWarsReduxState['mainListPrevQuery'];
    nextQuery: tStarWarsReduxState['mainListNextQuery'];
    results: tStarWarsReduxState['mainList'];
  },
  string,
  { rejectValue: string }
>('starWars/starWarsGetMainList', async (query, thunkAPI) => {
  try {
    const response = await axios.get(encodeURI(query));
    return {
      count: response.data.count,
      prevQuery: response.data.previous,
      nextQuery: response.data.next,
      results: response.data.results,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(errorHandler(error));
  }
});
