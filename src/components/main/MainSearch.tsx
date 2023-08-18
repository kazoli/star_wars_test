import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../logics/general/hooks';
import { starWarsSetMainListKeywords } from '../../logics/starWars/starWarsSlice';
import { Box, TextField, Button } from '@mui/material';

function MainSearch() {
  const dispatch = useAppDispatch();
  const mainListKeywords = useAppSelector(
    (state) => state.starWars.mainListKeywords,
  );

  const [form, setForm] = useState({ keywords: '' });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedKeywords = form.keywords.trim();
    if (trimmedKeywords !== mainListKeywords) {
      dispatch(starWarsSetMainListKeywords(trimmedKeywords));
    }
  };

  return (
    <Box
      component="form"
      className="flex flex-wrap gap-[20px] flex-col items-center w-full"
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <TextField
        id="standard-basic"
        className="w-full sm:max-w-[500px]"
        label="Search Character"
        variant="standard"
        value={form.keywords}
        onChange={(event) =>
          setForm((prevstate) => ({
            ...prevstate,
            keywords: event.target.value,
          }))
        }
      />
      <Button variant="outlined" type="submit" className="w-full sm:w-auto">
        Search Character
      </Button>
    </Box>
  );
}

export default MainSearch;
