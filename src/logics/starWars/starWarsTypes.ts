// Base type for person data of Star Wars
export type tStarWarsCharacter = {
  name: string;
  gender: string;
};

// Type of redux state
export type tStarWarsReduxState = {
  status: 'idle' | 'loading' | 'failed';

  mainListTotalResults: number;
  mainListKeyword: string;
  mainListSort: string;
  mainListPrevQuery: string;
  mainListQuery: string;
  mainListNextQuery: string;
  mainList: tStarWarsCharacter[];
};
