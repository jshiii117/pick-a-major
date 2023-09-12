import { Box, styled, Typography } from '@mui/material';
import React, { useState } from 'react';

import { CustomTheme } from '../Styling/CustomStyling';
import IconSvg from './IconSvg.jsx';

const QuestionCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const sx = {
    alignItems: 'center',
    borderRadius: '36px',
    boxShadow: '6px 6px 16px rgba(0, 0, 0, 0.16)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    height: '152px',
    justifyContent: 'center',
    margin: '0.6rem',
    width: '240px',
    textAlign: 'center',
    transition: 'all 0.3s ease-in-out',
  };

  const StyledBox = styled(Box)(({ isSelected }) => ({
    background: isSelected
      ? CustomTheme.palette.ThaiTea.main
      : CustomTheme.palette.BobaHighlight.main,
    border: `12px solid ${
      isSelected
        ? CustomTheme.palette.ThaiTea.main
        : CustomTheme.palette.BobaHighlight.main
    }`,
    ...(!isSelected && {
      '&:hover': {
        border: `12px solid ${CustomTheme.palette.RedBean.main}`,
        background: 'white',
      },
    }),
  }));

  return (
    <StyledBox
      isSelected={isSelected}
      key={item.name}
      sx={sx}
      onClick={handleClick}
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
    >
      {isHovered && !isSelected ? (
        <>
          <Typography variant="CustomHeading3">{item.name}</Typography>
          <Typography variant="CustomBody">{item.desc}</Typography>
        </>
      ) : (
        <>
          <IconSvg topic={item.key} size="48" color="white" />
          <Typography variant="CustomHeading3" sx={{ color: 'white' }}>
            {item.name}
          </Typography>
        </>
      )}
    </StyledBox>
  );
};

export default QuestionCard;
