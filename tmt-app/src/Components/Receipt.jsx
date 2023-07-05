import React from "react";
import { Container } from "@mui/material";
import QuizStepper from "./QuizStepper";

function Receipt() {
  return (
    <>
      <Container sx={{ my: "3rem" }}>
        <QuizStepper />
      </Container>
      Receipt Page
    </>
  );
}

export default Receipt;
