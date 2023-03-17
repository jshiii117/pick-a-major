import React from "react";
import "../Styling/Home.css";
import {
  FlexContainer,
  PrimaryButton,
  CustomTheme,
} from "../Styling/CustomStyling.js";
import { Container, Typography, Box, Grid, Paper, Stack } from "@mui/material";
import WhatIcon from "../Images/icons/what_light.svg";

import { Link as RouterLink } from "react-router-dom";

import CustomFooter from "./CustomFooter";

function EducationInfo() {
  return (
    <React.Fragment>
      <Container
        sx={{
          minWidth: "100%",
          paddingTop: "7.5rem",
          overflow: "hidden",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          backgroundColor: CustomTheme.palette.TestBackgroundColor.main,
        }}
      >
        <Typography variant="CustomHeading2" sx={{ marginBottom: "2rem" }}>
          Education
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {["What", "Who", "Career", "Tips"].map((educationItem) => (
            <EducationItem key={educationItem} educationItem={educationItem} />
          ))}
        </Box>
        <Container sx={{ marginTop: "3rem", width: "70%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Paper
                sx={{
                  backgroundColor: CustomTheme.palette.warning.main,
                  padding: "2rem",
                  borderRadius: "16px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: CustomTheme.palette.common.white }}
                >
                  Title 1
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: CustomTheme.palette.common.white,
                    marginTop: "1rem",
                    marginBottom: "2rem",
                  }}
                >
                  Body 1
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: CustomTheme.palette.common.white }}
                >
                  Title 2
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: CustomTheme.palette.common.white,
                    marginTop: "1rem",
                  }}
                >
                  Body 2
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url(https://source.unsplash.com/random)",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "16px",
                }}
              ></Box>
            </Grid>
          </Grid>
        </Container>
        <CustomFooter />
      </Container>
    </React.Fragment>
  );
}

export default EducationInfo;

function EducationItem({ educationItem }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        marginLeft: "-1rem",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          direction: "column",
          width: "6rem",
          height: "6rem",
          borderRadius: "50%",
          backgroundColor: CustomTheme.palette.Matcha.main,
          border: `3px solid ${CustomTheme.palette.common.white}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: "1",
          boxShadow: 4,
        }}
      >
        <img src={WhatIcon} alt="What Icon" style={{ width: 25 }} />
        <Typography
          variant="CustomHeading3"
          sx={{ color: CustomTheme.palette.common.white }}
        >
          {educationItem}
        </Typography>
      </Stack>
    </Box>
  );
}
