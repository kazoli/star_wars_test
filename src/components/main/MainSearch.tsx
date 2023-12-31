import { useState } from 'react';
import { useAppDispatch } from '../../logics/general/hooks';
import { starWarsSetMainListKeyword } from '../../logics/starWars/starWarsSlice';
import { Box, TextField, Button } from '@mui/material';

function MainSearch() {
  const dispatch = useAppDispatch();
  const [keyword, setKeyword] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(starWarsSetMainListKeyword(keyword));
  };

  return (
    <Box
      component="form"
      className="flex flex-wrap gap-[20px] flex-col items-center w-full mb-[60px]"
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <TextField
        id="standard-basic"
        className="w-full sm:max-w-[500px]"
        label="Search Character"
        variant="standard"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
      <Button variant="outlined" type="submit" className="w-full sm:w-auto">
        Search Character
      </Button>
    </Box>
  );
}

export default MainSearch;
