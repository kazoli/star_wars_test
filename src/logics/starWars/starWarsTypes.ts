// Base type for person data of Star Wars
export type tStarWarsPerson = {
  name: string;
};

// Type of redux state
export type tStarWarsReduxState = {
  status: 'idle' | 'loading' | 'failed';

  mainListTotalResults: number;
  mainListKeywords: string;
  mainListPage: number;
  mainListQuery: string;
  mainList: tStarWarsPerson[];
};
