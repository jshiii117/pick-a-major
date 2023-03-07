import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import HexagonIcon from "@mui/icons-material/Hexagon";
import { CustomTheme } from "../Styling/CustomStyling";
import ProgressBarIcon0 from "../Images/ProgressBarIcon0.png";
import ProgressBarIcon1 from "../Images/ProgressBarIcon1.png";
import ProgressBarIcon2 from "../Images/ProgressBarIcon2.png";
import ProgressBarIcon3 from "../Images/ProgressBarIcon3.png";

const progressBarIcons = [
  ProgressBarIcon0,
  ProgressBarIcon1,
  ProgressBarIcon2,
  ProgressBarIcon3,
];

const DiscreteProgressBar = ({ value, onChange }) => {
  return (
    <Grid
      container
      direction="row"
      style={{
        minWidth: 760,
        minHeight: 20,
        justifyContent: "space-between",
        alignContent: "center",
      }}
    >
      {[0, 1, 2, 3].map((index) => (
        <Stack key={index}>
          <img
            src={progressBarIcons[index]}
            alt="LycheeRectangle"
            style={{ z: -1 }}
          />
          <Box
            style={{
              z: 1,
              backgroundColor: "black",
              minWidth: "25px",
              minHeight: "25px",
            }}
          ></Box>
        </Stack>
      ))}
    </Grid>
  );
};

export default DiscreteProgressBar;
