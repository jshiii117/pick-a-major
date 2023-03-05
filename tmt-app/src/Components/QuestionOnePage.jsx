import React, { useState } from "react";
import "../Styling/Home.css";
import {
  PrimaryBtn,
  FlexContainer,
  CustomTheme,
} from "../Styling/CustomStyling.js";
import { Link, Container, Typography, Grid, Button } from "@mui/material";
import MilkTeaBlob from "../Images/MilkTeaBlob.png";
import LycheeRectangle from "../Images/LycheeRectangle.png";
import MilkTeaSwiggle2 from "../Images/MilkTeaSwiggle2.png";
import ThaiTeaSwiggle1 from "../Images/ThaiTeaSwiggle1.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Breadcrumb from "./Breadcrumb";
import { Link as RouterLink } from "react-router-dom";
import styled from "@emotion/styled";
import { COURSEINFO } from "../Data/constants";
import HexagonIcon from "@mui/icons-material/Hexagon";
// import { FlipIcon } from "@mui/icons-material/Flip"

const CourseItem = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const style = {
    margin: "1rem",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    width: "320px",
    height: isHovered ? "204px" : "208px",
    background: isHovered ? "white" : "#616587",
    color: isHovered ? "black" : "white",
    boxShadow: "6px 6px 16px rgba(0, 0, 0, 0.16)",
    borderRadius: "36px",
    flex: "none",
    order: 3,
    flexGrow: 0,
    border: isHovered ? "12px solid #800000" : "none",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <Grid
      item
      lg={3}
      key={course.title}
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
      style={style}
    >
      {isHovered ? (
        <>
          <Typography variant="CustomHeading3" style={{ color: "black" }}>
            {course.title}
          </Typography>
          <Typography
            variant="CustomHeading4"
            style={{ color: "black", textAlign: "center" }}
          >
            {course.info}
          </Typography>
        </>
      ) : (
        <>
          <HexagonIcon
            color="BTMilkTea"
            fontSize="large"
            style={{ marginRight: 8 }}
          />
          <Typography variant="CustomHeading3" style={{ color: "white" }}>
            {course.title}
          </Typography>
        </>
      )}
    </Grid>
  );
};

function QuestionOnePage() {
  return (
    <Container
      sx={{
        minWidth: "100%",
        paddingTop: "7.5rem",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      <Breadcrumb />
      <Container sx={{ paddingY: "6.25rem", minWidth: "300" }}>
        <Grid direction="column">
          <Container
            sx={{
              position: "absolute",
              top: "0",
              zIndex: "-3",
              minWidth: "1585px",
              paddingY: "2rem",
            }}
          >
            <img
              className="Home_Hero_Background"
              src={MilkTeaBlob}
              alt="MilkTeaBlob"
            />
          </Container>
          <Container width="100%" height="100%">
            <Grid
              container
              display="flex"
              sx={{
                backgroundColor: CustomTheme.palette.TestBackgroundColor.main,
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              {COURSEINFO.map((course) => (
                <CourseItem key={course.title} course={course} />
              ))}
            </Grid>
            <div style={{ height: 20 }} />
            <Container
              style={{
                width: "80%",
                backgroundColor: CustomTheme.palette.TestBackgroundColor.main,
              }}
            >
              <Grid
                container
                direction="row"
                display="flex"
                justifyContent="space-evenly"
              >
                <CustomButton buttonText={"Back"} />
                <CustomButton buttonText={"Continue"} />
              </Grid>
            </Container>
          </Container>
        </Grid>
      </Container>
      <FlexContainer sx={{ flexDirection: "row" }}>
        <FlexContainer
          sx={{
            position: "absolute",
            bottom: "-125%",
            justifyContent: "space-between",
            zIndex: "-1",
          }}
        >
          <div className="Home_Button_Bg_Left">
            <img
              src={LycheeRectangle}
              className="Home_Button_Bg_Img1"
              alt="LycheeRectangle"
            />
            <img
              src={MilkTeaSwiggle2}
              className="Home_Button_Bg_Img2"
              alt="MilkTeaSwiggle2"
            />
          </div>
          <div className="Home_Button_Bg_Right">
            <img
              src={ThaiTeaSwiggle1}
              className="Home_Button_Bg_Img3"
              alt="ThaiTeaSwiggle1"
            />
          </div>
        </FlexContainer>
      </FlexContainer>
    </Container>
  );
}

export default QuestionOnePage;

const CustomButton = ({ buttonText }) => {
  return (
    <Button
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        width: 350,
        height: 100,
        backgroundColor: "#FFFFFF",
        border: "4px solid #73956F",
        borderRadius: 2,
        flex: "none",
        order: 0,
        flexGrow: 0,
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#800000",
          border: "4px solid #800000",
          "& > .MuiTypography-root": {
            color: "#FFFFFF",
          },
        },
      }}
      variant="contained"
    >
      <Typography variant="CustomHeading2" sx={{ color: "#73956F" }}>
        {buttonText}
      </Typography>
    </Button>
  );
};
