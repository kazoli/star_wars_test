import { useAppDispatch, useAppSelector } from '../../logics/general/hooks';
import { starWarsSetMainListQuery } from '../../logics/starWars/starWarsSlice';
import { Button } from '@mui/material';

function MainListLoadNext() {
  const dispatch = useAppDispatch();
  const starWars = useAppSelector((state) => state.starWars);

  return (
    <Button
      variant="outlined"
      className="w-full"
      onClick={() =>
        dispatch(starWarsSetMainListQuery(starWars.mainListNextQuery))
      }
    >
      Load More
    </Button>
  );
}

export default MainListLoadNext;
