import { tStarWarsReduxState } from './starWarsTypes';
import { starWarsApiUrl } from './starWarsInitialStates';

// Build url for list
export const buildMainQuery = (
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
