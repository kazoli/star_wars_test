import { tStarWarsCharacter, tStarWarsReduxState } from './starWarsTypes';
import { starWarsApiUrl } from './starWarsInitialStates';
import { arrayReorder } from '../general/middlewares';

// Build url for main list
export const starWarsbuildMainQuery = (
  mainListKeyword: tStarWarsReduxState['mainListKeyword'],
) => {
  let query = '';
  // add search if it has content
  if (mainListKeyword) {
    query += `?search=${mainListKeyword}`;
  }
  // return with the final url
  return starWarsApiUrl + query;
};

// Reorder Star Wars list
export const starWarsListReorder = (
  mainList: tStarWarsReduxState['mainList'],
  mainListSort: tStarWarsReduxState['mainListSort'],
) => {
  const splittedSort = mainListSort.split('-');
  let sort;
  if (splittedSort[0] === 'gender') {
    if (splittedSort[1] === 'male') {
      sort = ['male'];
    } else {
      sort = ['female'];
    }
  } else {
    sort = splittedSort[1];
  }
  return arrayReorder(
    mainList,
    splittedSort[0] as keyof tStarWarsCharacter,
    sort,
  );
};
