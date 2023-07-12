import { Box, Typography } from '@mui/material';
import React from 'react';

import BobaBotLarge from '../Images/art/boba_bot_Large.svg';

function BobaBot({ text }) {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        position: 'relative',
      }}
    >
      <img
        src={BobaBotLarge}
        alt={`Mascot icon with speech bubble that says ${text}`}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />

      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          height: '40%',
          justifyContent: 'center',
          left: '1.5rem',
          position: 'absolute',
          top: '2rem',
          width: '50%',
          '@media (max-width: 2000px)': {
            left: '1rem',
            top: '1.5rem',
            width: '75%',
          },
          '@media (max-width: 960px)': {
            left: '0.8rem',
            top: '1.2rem',
            width: '80%',
          },
        }}
      >
        <Typography
          sx={{
            textAlign: 'center',
            overflow: 'hidden',
            '@media (max-width: 960px)': {
              fontSize: '0.9rem',
            },
            '@media (max-width: 600px)': {
              fontSize: '0.8rem',
            },
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}

export default BobaBot;
