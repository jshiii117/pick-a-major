import { Container, Grid } from '@mui/material';
import React from 'react';

import { CAREERS_CARDS_PLACEHOLDERS } from '../utils/constants';
import QuestionCard from './QuestionCard';

function Questions() {
  return (
    <Container>
      <Grid container justifyContent="center">
        {CAREERS_CARDS_PLACEHOLDERS.map((item) => (
          <Grid item key={item.title}>
            <QuestionCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Questions;
