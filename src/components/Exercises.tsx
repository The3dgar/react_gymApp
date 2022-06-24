import { Box, Pagination, Stack, Typography } from '@mui/material';
import { useEffect, useState, ChangeEvent } from 'react';

import { ExercisesResponse } from '../interfaces/gymInterfaces';
import { ExerciseCard } from './ExerciseCard';
import { getExercisesByBodyPart, getExercises } from '../apis/gymApi';

interface Props {
  exercises: ExercisesResponse[] | [];
  bodyPart: any;
  setExercises: any;
}

const EXERCISES_PER_PAGE = 9;

export const Exercises = ({ exercises, bodyPart, setExercises }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastExercise = currentPage * EXERCISES_PER_PAGE;
  const indexOfFirstExercise = indexOfLastExercise - EXERCISES_PER_PAGE;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };
  const getExercisesData = async () => {
    let exercisesData: any = [];
    if (!bodyPart) {
      const { data } = await getExercises();
      exercisesData = data;
    } else {
      const { data } = await getExercisesByBodyPart(bodyPart);
      exercisesData = data;
    }

    setExercises(exercisesData);
  };

  useEffect(() => {
    getExercisesData();
  }, [bodyPart]);

  return (
    <Box
      id='exercises'
      sx={{
        mt: {
          lg: '110px',
        },
      }}
      mt='50px'
      p='20px'>
      <Typography variant='h3' mb='46px'>
        Show results
      </Typography>
      <Stack
        direction='row'
        sx={{
          gap: {
            lg: '110px',
            xs: '50px',
          },
        }}
        flexWrap='wrap'
        justifyContent='center'>
        {currentExercises.map((e, i) => (
          <ExerciseCard key={e.id} exercise={e} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > 9 && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / EXERCISES_PER_PAGE)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  );
};
