import { Box, CircularProgress } from '@mui/material';

export const Loader = () => {
  return (
    <Box sx={{ display: 'flex' }} justifyContent={"center"} height='400px' alignItems={"center"} >
      <CircularProgress sx={{ color: "#ff2625"}}/>
    </Box>
  );
};
