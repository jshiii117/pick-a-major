import React from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import ForwardArrow from "../Images/Forward.png";
import { Link } from "react-router-dom";

function Breadcrumb({ breadcrumbs }) {
  return (
    <Breadcrumbs
      separator={
        <img
          style={{ width: "24px", margin: "0" }}
          src={ForwardArrow}
          alt="ForwardArrow"
        />
      }
      aria-label="breadcrumb"
      sx={{
        marginX: {
          xs: "1rem",
          md: "4rem",
        },
      }}
    >
      {breadcrumbs.map((breadcrumb, index) => {
        return breadcrumb?.url ? (
          <Typography
            key={index}
            component={Link}
            to={breadcrumb.url}
            variant="h6"
            sx={{
              color: "BobaHighlight.main",
              marginRight: {
                xs: "0px",
                sm: "8px",
                md: "16px",
              },
              textDecoration: "none",
            }}
          >
            {breadcrumb.label}
          </Typography>
        ) : (
          <Typography
            key={index}
            variant="h6"
            sx={{
              color: "BobaHighlight.main",
              marginLeft: {
                xs: "0px",
                sm: "8px",
                md: "16px",
              },
            }}
          >
            {breadcrumb.label}
          </Typography>
        );
      })}
    </Breadcrumbs>
  );
}

export default Breadcrumb;
