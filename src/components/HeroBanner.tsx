import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

export const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: {
          lg: '212px',
          xs: '70px',
        },
        ml: {
          sm: '50px',
        },
      }}
      position='relative'
      p='20px'>
      <Typography color='#FF2625' fontWeight='600px' fontSize='26px'>
        Fitness Club
      </Typography>

      <Typography
        fontWeight='700px'
        mb='20px'
        mt='30px'
        sx={{
          fontSize: {
            lg: '44px',
            xs: '40px',
          },
        }}>
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={4}>
        Check out the most effective exercises!
      </Typography>

      <Button
        variant='contained'
        color='error'
        href='/'
        sx={{
          backgroundColor: '#FF2625',
          padding: '10px',
        }}>
        Explore Exercises
      </Button>

      <Typography
        fontWeight='600px'
        fontSize='200px'
        color='#FF2625'
        sx={{
          opacity: 0.1,
          display: {
            lg: 'block',
            xs: 'none',
          },
        }}>
        Exercises
      </Typography>

      <img
        src={HeroBannerImage}
        alt='Hero banner'
        className='hero-banner-img'
      />
    </Box>
  );
};
