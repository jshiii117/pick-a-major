import React from "react";
import { FlexContainer, PrimaryBtn } from "../Styling/CustomStyling.js";
import { Box, Typography } from "@mui/material";

function GuideSidebar({ toggleButton }) {
  return (
    <FlexContainer sx={{ flexDirection: "column" }}>
      <Box sx={{ width: "60%", textAlign: "center" }}>
        <Box>
          <Typography variant="h1">Major Guide</Typography>
        </Box>
        <Box>
          <Typography variant="h3">Explore majors, careers, & more</Typography>
        </Box>
      </Box>
      <PrimaryBtn
        disabled={toggleButton}
        sx={{
          backgroundColor: toggleButton ? "InactiveGrey2.main" : "Matcha.main",
        }}
      >
        <Typography variant="h3">Take the Quiz</Typography>
      </PrimaryBtn>
    </FlexContainer>
  );
}

export default GuideSidebar;
