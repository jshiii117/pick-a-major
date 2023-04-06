import React from "react";
import { FlexContainer, PrimaryBtn } from "../Styling/CustomStyling.js";
import { Box, Typography } from "@mui/material";

function GuideSidebar({ toggleButton }) {
  return (
    <FlexContainer sx={{ flexDirection: "column" }}>
      <Box sx={{ width: "60%", textAlign: "center" }}>
        <Box>
          <Typography variant="CustomTitle">Major Guide</Typography>
        </Box>
        <Box>
          <Typography variant="CustomHeading2">
            Explore majors, careers, & more
          </Typography>
        </Box>
      </Box>
      <PrimaryBtn
        disabled={toggleButton}
        sx={{
          backgroundColor: toggleButton ? "InactiveGrey2.main" : "Matcha.main",
        }}
      >
        <Typography variant="CustomHeading2">Take the Quiz</Typography>
      </PrimaryBtn>
    </FlexContainer>
  );
}

export default GuideSidebar;
