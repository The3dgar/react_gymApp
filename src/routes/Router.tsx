import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import { Footer, Navbar } from '../components';
import { Home, ExerciseDetails } from '../pages';

export const Router = () => {
  return (
    <Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercises/:id' element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
};
