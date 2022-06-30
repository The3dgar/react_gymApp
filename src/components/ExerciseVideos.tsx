import { Box, Stack, Typography } from '@mui/material';
import { VideoResponse } from '../interfaces/gymInterfaces';

interface Props {
  videos: VideoResponse;
  name: string;
}

const THUMBNAIL_QTY = 3;
const YOUTUBE_URL = 'https://www.youtube.com';

export const ExerciseVideos = ({ videos, name }: Props) => {
  return (
    <Box
      sx={{
        lg: '200px',
        xs: '20px',
      }}
      p='20px'>
      <Typography variant='h3' mb='33px'>
        <span>
          Watch{' '}
          <span style={{ textTransform: 'capitalize', color: '#ff2625' }}>
            {name}
          </span>{' '}
          exercises videos
        </span>
      </Typography>

      <Stack
        justifyContent='flex-start'
        flexWrap='wrap'
        alignItems={'center'}
        sx={{
          gap: { lg: '110px', xs: '0px' },
          flexDirection: {
            lg: 'row',
          },
        }}>
        {videos.contents.slice(0, THUMBNAIL_QTY).map((v) => (
          <a
            key={v.video?.videoId}
            className='exercise-video'
            href={`${YOUTUBE_URL}/watch?v=${v.video?.videoId}`}
            target='_blank'
            rel='noreferrer'>
            <img
              src={v.video?.thumbnails[0].url}
              alt={v.video?.title}
              style={{
                padding: '2px',
                borderRadius: '10px',
                border: '2px solid #ff2625',
              }}
            />
            <Box>
              <Typography variant='h5' color='#000'>{v.video?.title}</Typography>
              <Typography variant='h6' color='#000'>{v.video?.channelName}</Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};
