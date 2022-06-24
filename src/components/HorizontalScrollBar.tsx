import { useContext } from 'react';
import { Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import { BodyPart } from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

interface Props {
  data: string[];
  bodyPart: string;
  setBodyPart: (bodyPart: string) => void;
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

  return (
    <Typography onClick={() => scrollNext()} className='left-arrow'>
      <img src={RightArrowIcon} alt='right-arrow' />
    </Typography>
  );
};

export const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }: Props) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        // TODO: fix this
        <BodyPart
          key={item}
          itemId={item}
          item={item}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      ))}
    </ScrollMenu>
  );
};
