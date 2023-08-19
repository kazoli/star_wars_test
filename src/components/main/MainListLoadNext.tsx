import { useAppDispatch, useAppSelector } from '../../logics/general/hooks';
import { starWarsGetMainList } from '../../logics/starWars/starWarsThunks';
import { Button } from '@mui/material';

function MainListLoadNext() {
  const dispatch = useAppDispatch();
  const starWars = useAppSelector((state) => state.starWars);

  return (
    <Button
      variant="outlined"
      className="w-full"
      onClick={() => dispatch(starWarsGetMainList(starWars.mainListNextQuery))}
    >
      Load More
    </Button>
  );
}

export default MainListLoadNext;
