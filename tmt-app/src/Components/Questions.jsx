import React from "react";
import { Container, Grid } from "@mui/material";
import QuestionCard from "./QuestionCard";
import { CAREERS_CARDS_PLACEHOLDERS } from "../constants/careerMajorList";

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
