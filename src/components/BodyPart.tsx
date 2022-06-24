import { Stack, Typography, Box } from '@mui/material';
import Icon from '../assets/icons/gym.png';

interface Props {
  item: string;
  bodyPart: string;
  setBodyPart: (bodyPart: string) => void;
  itemId: string;
}

export const BodyPart = ({ bodyPart, item, setBodyPart }: Props) => {
  const handleClick = () => {
    setBodyPart(item);
    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
  };
  return (
    <Box m='0px 40px'>
      <Stack
        alignItems={'center'}
        justifyContent={'center'}
        className='bodyPart-card'
        onClick={handleClick}
        sx={{
          borderTop: bodyPart === item ? '20px solid #ff2625' : 'none',
          backgroundColor: '#fff',
          borderBottomLeftRadius: '20px',
          width: '270px',
          height: '280px',
          cursor: 'pointer',
          gap: '47px',
        }}>
        <img
          src={Icon}
          alt='dumbbell'
          style={{
            width: '40px',
            height: '40px',
          }}
        />
        <Typography
          fontSize={'24px'}
          fontWeight={'bold'}
          color='#3a1212'
          textTransform={'capitalize'}>
          {item}
        </Typography>
      </Stack>
    </Box>
  );
};
