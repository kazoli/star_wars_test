import { tStarWarsReduxState } from './starWarsTypes';

// Base url
export const starWarsApiUrl = 'https://swapi.dev/api/people';

// Initial state of redux for Star Wars slice
export const initialStarWarsReduxState: tStarWarsReduxState = {
  status: 'idle',

  mainListTotalResults: 0,
  mainListKeywords: '',
  mainListPage: 1,
  mainListQuery: '',
  mainList: [],
};
