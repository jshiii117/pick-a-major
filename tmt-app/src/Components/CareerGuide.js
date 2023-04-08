import React from "react";
import { Grid, Typography } from "@mui/material";
import { FlexContainer } from "../Styling/CustomStyling.js";

function CareerGuide() {
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
          <Typography variant="CustomHeading1">Results</Typography>
          <Typography
            variant="CustomSubHeading"
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
      </Grid>
    </Grid>
  );
}

export default CareerGuide;
