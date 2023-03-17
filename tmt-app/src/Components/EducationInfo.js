import React, { useState } from "react";
import "../Styling/Home.css";
import {
  FlexContainer,
  PrimaryButton,
  CustomTheme,
} from "../Styling/CustomStyling.js";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Stack,
  Button,
} from "@mui/material";
import WhatIcon from "../Images/icons/what_light.svg";
import ImagePlaceholder from "../Images/ImagePlaceholder.png";
import { Link as RouterLink } from "react-router-dom";

import CustomFooter from "./CustomFooter";

function MajorInfo() {
  const [view, setView] = useState(0);

  const renderView = () => {
    switch (view) {
      case 0:
        return (
          <MajorDetailedView
            major={allMajors[0]}
            title={`What is ${allMajors[0].name} as a major?`}
            subtitle={`What classes should I look into?`}
          />
        );
      case 1:
        return (
          <MajorDetailedView
            major={allMajors[0]}
            title={`Who should pursue ${allMajors[0].name}?`}
            subtitle={`What skills do those in ${allMajors[0].name} have?`}
          />
        );
      case 2:
        return (
          <MajorDetailedView
            major={allMajors[0]}
            title={`What is ${allMajors[0].name} as a career?`}
            subtitle={`What classes involve ${allMajors[0].name} as a major?`}
          />
        );
      case 3:
        return (
          <MajorDetailedView
            major={allMajors[0]}
            title={`Any extra tips for those looking into ${allMajors[0].name}?`}
            subtitle={`What is ${allMajors[0].name} as a career?`}
          />
        );
      default:
        return null;
    }
  };

  function handleClick(index) {
    console.log(`running handleClick ${index}`);
    setView(index);
  }

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
        }}
      >
        <Typography variant="CustomHeading2" sx={{ marginBottom: "2rem" }}>
          Education
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {["What", "Who", "Career", "Tips"].map((majorItem, index) => (
            <MajorItem
              key={index}
              majorItem={majorItem}
              onClick={() => handleClick(index)}
            />
          ))}
        </Box>
        {renderView()}
        <CustomFooter />
      </Container>
    </React.Fragment>
  );
}

export default MajorInfo;

function MajorItem({ majorItem, onClick }) {
  return (
    <Box
      onClick={() => onClick()}
      sx={{
        cursor: "pointer",
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
          width: "8rem",
          height: "8rem",
          borderRadius: "50%",
          backgroundColor: CustomTheme.palette.Matcha.main,
          border: `3px solid ${CustomTheme.palette.common.white}`,
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
          {majorItem}
        </Typography>
      </Stack>
    </Box>
  );
}

function MajorDetailedView({ major, title, subtitle }) {
  return (
    <Container sx={{ marginTop: "3rem", width: "70%", height: "80vh" }}>
      <Paper
        sx={{
          backgroundColor: CustomTheme.palette.ThaiTea.main,
          padding: "2rem",
          height: "100%",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          direction="row"
          spacing={2}
          sx={{ padding: "", height: "100%", alignItems: "center" }}
        >
          <Grid item xs={12} md={7}>
            <Grid
              container
              direction="column"
              sx={{
                textAlign: "start",
                maxWidth: "90%",
                backgroundColor: CustomTheme.palette.TestBackgroundColor.main,
                justifyItems: "center",
                height: "100%",
              }}
            >
              <Typography
                variant="CustomHeading2"
                sx={{
                  color: CustomTheme.palette.common.black,
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="CustomBody"
                sx={{
                  color: CustomTheme.palette.common.black,
                  marginTop: "1rem",
                  marginBottom: "2rem",
                }}
              >
                {major.pageOneUpper}
              </Typography>
              <Typography
                variant="CustomHeading2"
                sx={{ color: CustomTheme.palette.common.black }}
              >
                {subtitle}
              </Typography>
              <Box component="ul">
                {major.pageOneList.map((item, index) => (
                  <Typography
                    key={index}
                    variant="CustomBody"
                    component="li"
                    style={{ listStyle: "disc", paddingLeft: "1rem" }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Grid>
            {/* <Paper
              sx={{
                backgroundColor: CustomTheme.palette.warning.main,
                padding: "2rem",
                paddingX: "2rem",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "start",
              }}
            > */}

            {/* </Paper> */}
          </Grid>
          <Grid item xs={12} md={5}>
            <Box>
              <img
                src={ImagePlaceholder}
                alt=""
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

const allMajors = [
  {
    name: "Education",
    pageOneUpper:
      "Education is a field that involves the study of teaching and learning, including the theories and practices of educational psychology, instructional design, and the sociology of education. Education majors typically prepare to become teachers or work in related fields such as educational administration or policy.",
    pageOneList: [
      "Education Psychology",
      "Language Development",
      "Social Issues in Education",
    ],
    pageTwoUpper:
      "Education is a field that involves the study of teaching and learning, including the theories and practices of educational psychology, instructional design, and the sociology of education. Education majors typically prepare to become teachers or work in related fields such as educational administration or policy.",
    pageTwoList: ["People Management", "Conflict Resolution"],
    pageThreeUpper:
      "Education is a field that involves the study of teaching and learning, including the theories and practices of educational psychology, instructional design, and the sociology of education. Education majors typically prepare to become teachers or work in related fields such as educational administration or policy.",
    pageThreeList: ["Human Resources", "Recruiting", "Education"],
    pageFourUpper:
      "Yes! We have a few extra resources for those interested in Education:",
    pageFourResources: [
      "Salary information via talent",
      "BobaTalks Resource Hub",
      "BobaTalks Discord Server",
    ],
  },
];
