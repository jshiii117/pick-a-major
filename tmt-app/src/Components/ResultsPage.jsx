import { Grid, Hidden, Typography } from '@mui/material';
import React from 'react';

import { FlexContainer } from '../Styling/CustomStyling.js';
import BobaBot from './BobaBot.jsx';
import ResultCardsContainer from './ResultCardsContainer.jsx';

function ResultsPage() {
  return (
    <Grid
      container
      sx={{
        paddingTop: '7.5rem',
        minHeight: '100vh',
        width: '100%',
        paddingX: {
          xs: '0',
          sm: '0',
          md: '5rem',
        },
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
      }}
    >
      <Grid
        item
        xs={11}
        sm={11}
        md={8}
        lg={6}
        sx={{
          position: 'relative',
          margin: '0 auto',
        }}
      >
        <FlexContainer
          sx={{
            marginX: '0',
            paddingTop: '2rem',
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'row',
            },
            justifyContent: 'flex-start',
          }}
        >
          <Typography variant="h2">Results</Typography>
          <Typography
            variant="h5"
            sx={{
              marginLeft: {
                xs: '0',
                sm: '0',
                md: '3rem',
              },
            }}
          >
            Your results are lost once you leave this page.
          </Typography>
        </FlexContainer>
        <Typography
          variant="h4"
          style={{
            margin: '5rem 0 3rem 0',
          }}
        >
          Quiz Results
        </Typography>
        <ResultCardsContainer />
      </Grid>
      <Hidden mdDown>
        <Grid
          item
          xs="none"
          sm="none"
          md={4}
          lg={5}
          sx={{
            paddingLeft: '3rem',
            marginTop: '9.5rem',
          }}
        >
          <BobaBot text="Screenshot your results! They are lost after leaving this page." />
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default ResultsPage;
