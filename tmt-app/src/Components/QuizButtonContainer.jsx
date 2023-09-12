import { Box, Button, Link } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

function QuizButtonContainer({ step }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        margin: '4.5rem 2rem',
      }}
    >
      <Link
        sx={{ color: 'Boba.main' }}
        underline="none"
        aria-label="quiz-backward"
        component={RouterLink}
        to="/quiz/skills"
      >
        <Button variant="quizButton" color="secondary">
          Back
        </Button>
      </Link>
      <Link
        sx={{ color: 'Boba.main' }}
        underline="none"
        aria-label="quiz-forward"
        component={RouterLink}
        to="/quiz/skills"
      >
        <Button variant="quizButton" color="primary">
          {step === 'classes' ? 'Next Question' : "I'm Finished"}
        </Button>
      </Link>
    </Box>
  );
}

export default QuizButtonContainer;
