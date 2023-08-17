import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../logics/general/hooks';
import { starWarsSetMainListQuery } from '../../logics/starWars/starWarsSlice';
import { starWarsGetMainList } from '../../logics/starWars/starWarsThunks';
import { buildMainQuery } from '../../logics/starWars/starWarsMiddlewares';
import DefaultLayout from '../layout/DefaultLayout';

function Main() {
  const dispatch = useAppDispatch();
  const starWars = useAppSelector((state) => state.starWars);

  useEffect(() => {
    document.title = 'Star Wars ';
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      const url = buildMainQuery(
        starWars.mainListKeywords,
        starWars.mainListPage,
      );
      // to avoid unnecessary requests if query has not changed
      if (url !== starWars.mainListQuery) {
        dispatch(starWarsSetMainListQuery(url));
        dispatch(starWarsGetMainList(url));
      }
    }, 500);
    return () => {
      // to throttle too fast consecutive requesting and send only the last one after the delay
      clearTimeout(timerId);
    };
  }, [
    dispatch,
    starWars.mainListQuery,
    starWars.mainListKeywords,
    starWars.mainListPage,
  ]);

  return (
    <DefaultLayout loading={starWars.status === 'loading'}>
      <></>
    </DefaultLayout>
  );
}

export default Main;
