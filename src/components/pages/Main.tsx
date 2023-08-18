import { useEffect } from 'react';
import { useAppSelector } from '../../logics/general/hooks';
import DefaultLayout from '../layout/DefaultLayout';
import MainSearch from '../main/MainSearch';
import MainList from '../main/MainList';

function Main() {
  useEffect(() => {
    document.title = 'Star Wars Character Search';
  }, []);

  const status = useAppSelector((state) => state.starWars.status);

  return (
    <DefaultLayout loading={status === 'loading'}>
      <>
        <MainSearch />
        <MainList />
      </>
    </DefaultLayout>
  );
}

export default Main;
