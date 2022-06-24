import { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { getExercises, getCategories } from '../apis/gymApi';
import { HorizontalScrollBar } from './HorizontalScrollBar';
import { ExercisesResponse } from '../interfaces/gymInterfaces';

export const SearchExercises = ({
  setExercises,
  bodyPart,
  setBodyPart,
}: any) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState<string[]>([]);

  const getBodyParts = async () => {
    const { data } = await getCategories();
    setBodyParts(data);
  };

  useEffect(() => {
    getBodyParts();
  }, []);

  const handleSearch = async () => {
    if (!search) return;
    const { data } = await getExercises();
    const filterExercises = data.filter(
      (e) =>
        e.name.toLowerCase().includes(search) ||
        e.target.toLowerCase().includes(search) ||
        e.equipment.toLowerCase().includes(search) ||
        e.bodyPart.toLowerCase().includes(search)
    );

    setSearch('');
    setExercises(filterExercises);
  };
  return (
    <Stack alignItems={'center'} mt='37px' justifyContent={'center'} p='20px'>
      <Typography
        variant='h4'
        fontWeight={700}
        sx={{
          fontSize: {
            lg: '44px',
            xl: '30px',
          },
        }}
        mb='20px'
        textAlign={'center'}>
        Search Awesome Exercises
      </Typography>

      <Box position='relative' mb='72px'>
        <TextField
          sx={{
            input: {
              fontWeight: 700,
              border: 'none',
            },
            width: {
              lg: '800px',
              xs: '350px',
            },
            backgroundColor: '#fafafa',
            borderRadius: '4px',
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search for an exercise'
          type='text'
        />
        <Button
          className='search-btn'
          onClick={handleSearch}
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: {
              lg: '175px',
              xs: '80px',
            },
            fontsize: {
              lg: '20px',
              xs: '12px',
            },
            height: '56px',
            position: 'absolute',
            right: '0',
          }}>
          Search
        </Button>
      </Box>

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          padding: '20px',
        }}>
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};
