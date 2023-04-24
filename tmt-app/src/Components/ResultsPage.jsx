import React from "react";
import { Grid, Typography } from "@mui/material";
import { FlexContainer } from "../Styling/CustomStyling.js";
import ResultCardsContainer from "./ResultCardsContainer.jsx";

function ResultsPage() {
  return (
    <Grid
      container
      sx={{
        paddingTop: "7.5rem",
        minHeight: "100vh",
        width: "100%",
        paddingX: {
          xs: "0",
          sm: "0",
          md: "5rem",
        },
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Grid
        item
        xs={11}
        sm={11}
        md={8}
        sx={{
          position: "relative",
          margin: "0 auto",
        }}
      >
        <FlexContainer
          sx={{
            marginX: "0",
            paddingTop: "2rem",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
            },
          }}
        >
          <Typography variant="h2">Results</Typography>
          <Typography
            variant="h5"
            sx={{
              marginLeft: {
                xs: "0",
                sm: "0",
                md: "5rem",
              },
            }}
          >
            Your results are lost once you leave this page.
          </Typography>
        </FlexContainer>
        <ResultCardsContainer />
      </Grid>
    </Grid>
  );
}

export default ResultsPage;
