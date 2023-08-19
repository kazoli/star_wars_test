import { tStarWarsCharacter, tStarWarsReduxState } from './starWarsTypes';
import { starWarsApiUrl } from './starWarsInitialStates';
import { alphabetReorder } from '../general/middlewares';

// Build url for main list
export const starWarsbuildMainQuery = (
  mainListKeywords: tStarWarsReduxState['mainListKeywords'],
) => {
  let query = '';
  // add search if it has content
  if (mainListKeywords) {
    query += `?search=${mainListKeywords}`;
  }
  // return with the final url
  return starWarsApiUrl + query;
};

// Reorder Star Wars list
export const starWarsListReorder = (
  mainList: tStarWarsReduxState['mainList'],
  mainListSort: tStarWarsReduxState['mainListSort'],
) => {
  const sort = mainListSort.split('-');
  return alphabetReorder(
    mainList,
    sort[0] as keyof tStarWarsCharacter,
    sort[1] === 'asc',
  );
};
