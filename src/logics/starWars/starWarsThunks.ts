import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { errorHandler } from '../general/error';
import { tStarWarsCharacter } from './starWarsTypes';

// Get data of main list
export const starWarsGetMainList = createAsyncThunk<
  {
    count: number;
    results: tStarWarsCharacter[];
  },
  string,
  { rejectValue: string }
>('starWars/starWarsGetMainList', async (query, thunkAPI) => {
  try {
    const response = await axios.get(encodeURI(query));
    return {
      count: response.data.count,
      results: response.data.results,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(errorHandler(error));
  }
});
