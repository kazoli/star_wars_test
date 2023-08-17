import { tStarWarsReduxState } from './starWarsTypes';
import { starWarsApiUrl } from './starWarsInitialStates';

// Build url for list
export const buildMainQuery = (
  mainListKeywords: tStarWarsReduxState['mainListKeywords'],
  mainListPage: tStarWarsReduxState['mainListPage'],
) => {
  // set query
  let query = '';

  return starWarsApiUrl + query;
};
