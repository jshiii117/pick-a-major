import React from "react";
import { Grid, Typography, Hidden } from "@mui/material";
import { FlexContainer } from "../Styling/CustomStyling.js";
import ResultCardsContainer from "./ResultCardsContainer.jsx";
import BobaBot from "./BobaBot.jsx";

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
        lg={6}
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
      <Hidden mdDown>
        <Grid
          item
          xs="none"
          sm="none"
          md={4}
          lg={5}
          sx={{
            paddingLeft: "3rem",
          }}
        >
          <BobaBot text="Screenshot your results! They are lost after leaving this page." />
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default ResultsPage;
