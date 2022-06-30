import { Box, Stack, Typography } from '@mui/material';
import { ExercisesResponse } from '../interfaces/gymInterfaces';
import { HorizontalScrollBar } from './HorizontalScrollBar';
import { Loader } from './Loader';

interface Props {
  targetMuscleExercises: ExercisesResponse[];
  equipment: ExercisesResponse[];
}

export const SimilarExercises = ({
  targetMuscleExercises,
  equipment,
}: Props) => {
  // console.log(targetMuscleExercises)
  // console.log(equipment)
  return (
    <Box
      sx={{
        mt: {
          lg: '100px',
          xs: '0px',
        },
      }}>
      <Typography variant='h3' mb={5}>
        Exercises that target the same muscle group
      </Typography>

      <Stack direction={'row'} sx={{ p: '2', position: 'relative', mb:'40px', border: "2px solid red" }}>
        {targetMuscleExercises.length && (
          <HorizontalScrollBar data={targetMuscleExercises} />
        )}
      </Stack>

      <Typography variant='h3' mb={5}>
        Exercises that target the same equipment
      </Typography>

      <Stack
        direction={'row'}
        sx={{ p: '0', position: 'relative', mb: '40px' }}>
        {equipment.length && <HorizontalScrollBar data={equipment} />}
      </Stack>
    </Box>
  );
};
