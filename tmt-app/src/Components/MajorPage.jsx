import { Container, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { MAJORS_LIST } from "../utils/constants";

function MajorPage() {
  const params = useParams();
  let data = [];

  const searchData = (target) => {
    data = MAJORS_LIST[`"${target}"`];
  };

  searchData(params.major);
  return (
    <Container>
      <Typography
        variant="h1"
        sx={{
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {data.name} (Major)
      </Typography>
    </Container>
  );
}

export default MajorPage;
