import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { FlexContainer, PrimaryBtn } from '../Styling/CustomStyling.js';

function GuideSidebar({ toggleButton }) {
  return (
    <FlexContainer sx={{ flexDirection: 'column' }}>
      <Box
        sx={{
          width: {
            xs: '175px',
            sm: '225px',
            xl: '275px',
          },
          textAlign: 'center',
        }}
      >
        <Box>
          <Typography variant="h1">Major Guide</Typography>
        </Box>
        <Box>
          <Typography variant="h3">Explore majors, careers, & more</Typography>
        </Box>
      </Box>
      <Link
        sx={{ color: 'Boba.main' }}
        underline="none"
        aria-label="Learn more about other different majors"
        component={RouterLink}
        to="/quiz/1"
      >
        <PrimaryBtn
          disabled={toggleButton}
          sx={{
            backgroundColor: toggleButton
              ? 'InactiveGrey2.main'
              : 'Matcha.main',
            '&.MuiButtonBase-root': {
              padding: {
                xs: '1rem 2.5rem',
                xl: '1rem 3.25rem',
              },
            },
          }}
        >
          <Typography variant="h4">Take the Quiz</Typography>
        </PrimaryBtn>
      </Link>
    </FlexContainer>
  );
}

export default GuideSidebar;
