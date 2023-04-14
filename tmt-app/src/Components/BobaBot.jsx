import React from "react";
import BobaBotLarge from "../Images/art/boba_bot_Large.svg";
import { Box, Typography } from "@mui/material";

function BobaBot({ text }) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        position: "relative",
      }}
    >
      <img
        src={BobaBotLarge}
        alt={`Mascot icon with speech bubble that says ${text}`}
      />
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          height: "40%",
          justifyContent: "center",
          left: "1.5rem",
          position: "absolute",
          top: "2rem",
          width: "70%",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}

export default BobaBot;
