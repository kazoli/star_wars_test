import { initialStarWarsReduxState } from '../logics/starWars/starWarsInitialStates';
import starWarsReducer, {
  starWarsSetMainListQuery,
} from '../logics/starWars/starWarsSlice';

describe('Star Wars reducer', () => {
  it('should handle initial state', () => {
    expect(starWarsReducer(undefined, { type: 'unknown' })).toEqual(
      initialStarWarsReduxState,
    );
  });

  it('should handle main list query changing', () => {
    const data = 'https://test.com';
    const actual = starWarsReducer(
      initialStarWarsReduxState,
      starWarsSetMainListQuery(data),
    );
    expect(actual.mainListQuery).toEqual(data);
  });
});
