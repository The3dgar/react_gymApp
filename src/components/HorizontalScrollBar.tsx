import { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import { BodyPart } from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import { ExerciseCard } from './ExerciseCard';
import { ExercisesResponse } from '../interfaces/gymInterfaces';

interface Props {
  data: string[] | ExercisesResponse[];
  bodyPart?: string;
  setBodyPart?: (bodyPart: string) => void;
}

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className='right-arrow'>
      <img src={LeftArrowIcon} alt='right-arrow' />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  const handleClick = () => {
    console.log('first');
    scrollNext();
  };
  return (
    <Typography onClick={handleClick} className='left-arrow'>
      <img src={RightArrowIcon} alt='right-arrow' />
    </Typography>
  );
};

export const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }: Props) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) =>
        typeof item === 'string' ? (
          <BodyPart
            key={item}
            itemId={item}
            item={item}
            bodyPart={bodyPart as string}
            setBodyPart={setBodyPart as (x: string) => void}
          />
        ) : (
          <ExerciseCard exercise={item} key={item.id} itemId={item.id} />
        )
      )}
    </ScrollMenu>
  );
};
