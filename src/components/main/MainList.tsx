import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../logics/general/hooks';
import { starWarsSetMainListQuery } from '../../logics/starWars/starWarsSlice';
import { starWarsGetMainList } from '../../logics/starWars/starWarsThunks';
import { buildMainQuery } from '../../logics/starWars/starWarsMiddlewares';
import MainListHeader from './MainListHeader';
import MainListElement from './MainListElement';
import MainListLoadNext from './MainListLoadNext';

function MainList() {
  const dispatch = useAppDispatch();
  const starWars = useAppSelector((state) => state.starWars);

  useEffect(() => {
    if (starWars.mainListQuery) {
      // to throttle too fast consecutive requesting and send only the last one after the delay
      const timerId = setTimeout(() => {
        // request data according to query string
        dispatch(starWarsGetMainList(starWars.mainListQuery));
      }, 500);
      return () => clearTimeout(timerId);
    } else {
      // set initial query string
      dispatch(starWarsSetMainListQuery(buildMainQuery('')));
    }
  }, [dispatch, starWars.mainListQuery]);

  return (
    <>
      <MainListHeader />
      {starWars.mainList.map((data) => (
        <MainListElement data={data} />
      ))}
      <MainListLoadNext />
    </>
  );
}

export default MainList;
