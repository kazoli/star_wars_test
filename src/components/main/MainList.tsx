import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../logics/general/hooks';
import { starWarsSetMainListQuery } from '../../logics/starWars/starWarsSlice';
import { starWarsGetMainList } from '../../logics/starWars/starWarsThunks';
import { starWarsBuildMainQuery } from '../../logics/starWars/starWarsMiddlewares';
import MainListHeader from './MainListHeader';
import MainListElement from './MainListElement';
import MainListLoadNext from './MainListLoadNext';
import MainListEmpty from './MainListEmpty';

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
      dispatch(starWarsSetMainListQuery(starWarsBuildMainQuery()));
    }
  }, [dispatch, starWars.mainListQuery]);

  return starWars.mainList.length ? (
    <>
      <MainListHeader />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[20px] my-[20px]">
        {starWars.mainList.map((data, index) => (
          <MainListElement key={index} data={data} />
        ))}
      </div>
      {starWars.mainListNextQuery && <MainListLoadNext />}
    </>
  ) : (
    <MainListEmpty />
  );
}

export default MainList;
