import { starWarsMainListSort } from '../../logics/starWars/starWarsInitialStates';
import { useAppDispatch, useAppSelector } from '../../logics/general/hooks';
import { starWarsSetMainListSort } from '../../logics/starWars/starWarsSlice';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function MainListHeader() {
  const dispatch = useAppDispatch();
  const starWars = useAppSelector((state) => state.starWars);

  return (
    <nav className="flex flex-wrap gap-[20px] items-end justify-between">
      <div>{`Showing ${starWars.mainList.length} of ${starWars.mainListTotalResults}`}</div>
      <FormControl variant="outlined" sx={{ minWidth: 150 }}>
        <InputLabel id="sort-by-label">Sort by</InputLabel>
        <Select
          labelId="sort-by-label"
          id="sort-by"
          label="Sort by"
          value={starWars.mainListSort}
          onChange={(event) =>
            dispatch(starWarsSetMainListSort(event.target.value))
          }
        >
          {starWarsMainListSort.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </nav>
  );
}

export default MainListHeader;
