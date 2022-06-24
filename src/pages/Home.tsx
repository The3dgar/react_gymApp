import { Box } from '@mui/material';
import { useState } from 'react';
import { Exercises, HeroBanner, SearchExercises } from '../components';
import { ExercisesResponse } from '../interfaces/gymInterfaces';

export const Home = () => {
  const [exercises, setExercises] = useState<ExercisesResponse[]>([]);
  const [bodyPart, setBodyPart] = useState('');
  
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />

      <Exercises
        exercises={exercises}
        bodyPart={bodyPart}
        setExercises={setExercises}
      />
    </Box>
  );
};
