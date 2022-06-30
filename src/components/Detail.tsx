import React from 'react';
import { ExercisesResponse } from '../interfaces/gymInterfaces';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import { Button, Stack, Typography } from '@mui/material';

interface Props {
  exerciseDetail: ExercisesResponse;
}

export const Detail = ({ exerciseDetail }: Props) => {
  const { bodyPart, equipment, gifUrl, id, name, target } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap='60px'
      sx={{
        flexDirection: {
          lg: 'row',
        },
        p: '20px',
        alignItems: 'center',
      }}>
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
      <Stack
        sx={{
          gap: {
            lg: '35px',
            xs: '20px',
          },
        }}>
        <Typography variant='h3'>{name}</Typography>
        <Typography
          sx={{ fontSize: { lg: '24px', xs: '18px' } }}
          color='#4F4C4C'>
          Exercises keep you strong.
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Typography>

        {extraDetail.map((i) => (
          <Stack key={i.name} direction='row' gap='24px' alignItems={'center'}>
            <Button
              sx={{
                background: '#fff2db',
                borderRadius: '50%',
                width: '100px',
                height: '100px',
              }}>
              <img
                src={i.icon}
                alt={bodyPart}
                style={{
                  width: '50px',
                  height: '50px',
                }}
              />
            </Button>
            <Typography variant='h5' textTransform={"capitalize"}>{i.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
