import { Container, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { MAJORS_LIST } from "../utils/constants";
import Breadcrumb from "./Breadcrumb";
function MajorPage() {
  const params = useParams();
  let data = [];

  const searchData = (target) => {
    data = MAJORS_LIST[`"${target}"`];
  };

  searchData(params.major);
  return (
    <Container sx={{ minWidth: "70%" }}>
      <Breadcrumb
        breadcrumbs={[
          { url: "/", label: "Home" },
          { label: `${data.name} (Major)` },
        ]}
      />
      <Typography
        variant="h1"
        sx={{
          margin: "2rem auto",
          textAlign: "center",
        }}
      >
        {data.name} (Major)
      </Typography>
    </Container>
  );
}

export default MajorPage;
