import { tSelectOption } from '../general/types';
import { tStarWarsReduxState } from './starWarsTypes';

// Base url
export const starWarsApiUrl = 'https://swapi.dev/api/people/';

// Initial state of sort select in Star Wars main list
export const starWarsMainListSort: tSelectOption[] = [
  { value: 'name-asc', text: 'Name (A-Z)' },
  { value: 'name-desc', text: 'Name (Z-A)' },
  { value: 'gender-female', text: 'Females first' },
  { value: 'gender-male', text: 'Males first' },
];

// Initial state of redux for Star Wars slice
export const initialStarWarsReduxState: tStarWarsReduxState = {
  status: 'idle',

  mainListTotalResults: 0,
  mainListKeyword: '',
  mainListSort: '',
  mainListPrevQuery: '',
  mainListQuery: '',
  mainListNextQuery: '',
  mainList: [],
};
