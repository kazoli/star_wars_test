import { store } from '../logics/general/store';
import starWarsReducer, {
  starWarsSetMainListKeyword,
  starWarsSetMainListQuery,
  starWarsSetMainListSort,
} from '../logics/starWars/starWarsSlice';
import { starWarsGetMainList } from '../logics/starWars/starWarsThunks';
import {
  initialStarWarsReduxState,
  starWarsApiUrl,
} from '../logics/starWars/starWarsInitialStates';

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

  it('should handle main list search keyword', () => {
    const dispatchedData = '      leia        ';
    const expectedData = dispatchedData.trim();
    const actual = starWarsReducer(
      initialStarWarsReduxState,
      starWarsSetMainListKeyword(dispatchedData),
    );
    // keyword in state
    expect(actual.mainListKeyword).toEqual(expectedData);
    // main list query in state
    expect(actual.mainListQuery).toEqual(
      `${starWarsApiUrl}?search=${expectedData}`,
    );
  });

  it('should handle main list reordering', () => {
    const data = {
      ...initialStarWarsReduxState,
      mainList: [
        { name: 'C-3PO', gender: 'n/a' },
        { name: 'Leia Organa', gender: 'female' },
        { name: 'Anakin Skywalker', gender: 'male' },
        { name: 'Mon Mothma', gender: 'female' },
        { name: 'R2-D2', gender: 'n/a' },
        { name: 'Darth Vader', gender: 'male' },
      ],
    };
    // sorting: name # A-Z
    const order_1 = 'name-asc';
    const actual_1 = starWarsReducer(data, starWarsSetMainListSort(order_1));
    expect(actual_1.mainList).toEqual([
      { name: 'Anakin Skywalker', gender: 'male' },
      { name: 'C-3PO', gender: 'n/a' },
      { name: 'Darth Vader', gender: 'male' },
      { name: 'Leia Organa', gender: 'female' },
      { name: 'Mon Mothma', gender: 'female' },
      { name: 'R2-D2', gender: 'n/a' },
    ]);
    // sorting: name # Z-A
    const order_2 = 'name-desc';
    const actual_2 = starWarsReducer(data, starWarsSetMainListSort(order_2));
    expect(actual_2.mainList).toEqual([
      { name: 'R2-D2', gender: 'n/a' },
      { name: 'Mon Mothma', gender: 'female' },
      { name: 'Leia Organa', gender: 'female' },
      { name: 'Darth Vader', gender: 'male' },
      { name: 'C-3PO', gender: 'n/a' },
      { name: 'Anakin Skywalker', gender: 'male' },
    ]);
    // sorting: gender # females first
    const order_3 = 'gender-female';
    const actual_3 = starWarsReducer(data, starWarsSetMainListSort(order_3));
    expect(actual_3.mainList).toEqual([
      { name: 'Leia Organa', gender: 'female' },
      { name: 'Mon Mothma', gender: 'female' },
      { name: 'C-3PO', gender: 'n/a' },
      { name: 'Anakin Skywalker', gender: 'male' },
      { name: 'R2-D2', gender: 'n/a' },
      { name: 'Darth Vader', gender: 'male' },
    ]);
    // sorting: gender # males first
    const order_4 = 'gender-male';
    const actual_4 = starWarsReducer(data, starWarsSetMainListSort(order_4));
    expect(actual_4.mainList).toEqual([
      { name: 'Anakin Skywalker', gender: 'male' },
      { name: 'Darth Vader', gender: 'male' },
      { name: 'C-3PO', gender: 'n/a' },
      { name: 'Leia Organa', gender: 'female' },
      { name: 'Mon Mothma', gender: 'female' },
      { name: 'R2-D2', gender: 'n/a' },
    ]);
  });

  it('should handle main list search return data', async () => {
    // search query to get data of Leia Organa
    const searchQuery = `${starWarsApiUrl}?search=leia`;
    // dispatch the thunk with a query
    await store.dispatch(starWarsGetMainList(searchQuery));
    // get the current state of Star Wars
    const state = store.getState().starWars;
    // expected values of state after thunk action finished
    expect(state.status).toEqual('idle');
    expect(state.mainListTotalResults).toEqual(1);
    expect(state.mainListPrevQuery).toEqual('');
    expect(state.mainListNextQuery).toEqual('');
    expect(state.mainList).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'Leia Organa', gender: 'female' }),
      ]),
    );
  });
});
