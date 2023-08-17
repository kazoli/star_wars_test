import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { errorHandler } from '../general/error';
import { tStarWarsPerson } from './starWarsTypes';

// Get data of main list
export const starWarsGetMainList = createAsyncThunk<
  {
    count: number;
    data: {
      name: tStarWarsPerson['name'];
    }[];
  },
  string,
  { rejectValue: string }
>('starWars/starWarsGetMainList', async (query, thunkAPI) => {
  try {
    const response = await axios.get(encodeURI(query));
    return {
      count: response.data.count,
      data: response.data.data,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(errorHandler(error));
  }
});
