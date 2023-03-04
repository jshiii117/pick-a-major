import React, { useState } from "react";
import "../Styling/Home.css";
import {
  PrimaryBtn,
  FlexContainer,
  CustomTheme,
} from "../Styling/CustomStyling.js";
import { Link, Container, Typography, Grid, Paper } from "@mui/material";
import MilkTeaBlob from "../Images/MilkTeaBlob.png";
import LycheeRectangle from "../Images/LycheeRectangle.png";
import MilkTeaSwiggle2 from "../Images/MilkTeaSwiggle2.png";
import ThaiTeaSwiggle1 from "../Images/ThaiTeaSwiggle1.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Breadcrumb from "./Breadcrumb";
import { Link as RouterLink } from "react-router-dom";
import styled from "@emotion/styled";
import { COURSEINFO } from "../Data/constants";
// import { FlipIcon } from "@mui/icons-material/Flip"

const CourseItem = ({ course }) => {
  return (
    <Grid
      item
      lg={3}
      key={course.title}
      // sx={{
      //   backgroundColor: "rgba(97, 101, 135, 1)",
      //   borderRadius: "16px",
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   padding: "1rem",
      //   margin: "1rem",
      //   minWidth: "300",
      //   minHeight: "200",
      // }}
      style={{
        margin: "1rem",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // padding: "38px 0px",
        gap: "1rem",
        width: "320px",
        height: "208px",
        background: "#616587",
        boxShadow: "4px 4px 16px rgba(0, 0, 0, 0.16)",
        borderRadius: "36px",
        flex: "none",
        order: 3,
        flexGrow: 0,
      }}
    >
      <Typography variant="CustomHeading3" style={{ color: "white" }}>
        {course.title}
      </Typography>
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
      <Container
        width="80%"
        backgroundColor="gold"
        sx={{ paddingY: "6.25rem", minWidth: "300" }}
      >
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
                backgroundColor: "red",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              {COURSEINFO.map((course) => (
                <CourseItem key={course.title} course={course} />
              ))}
            </Grid>
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

function UniversityClassItem(props) {
  const StyledGridItem = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: "center",
    border: `4px solid ${theme.palette.secondary.light}`,
    borderRadius: "4px",
    transition: "transform 0.5s",
    "&:hover": {
      transform: "rotateY(180deg)",
    },
  }));

  const StyledFlipItem = styled(StyledGridItem)({
    transform: "rotateY(180deg)",
  });

  function MyGridItem() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };

    return (
      <>
        <Typography>Hello there</Typography>
        {isFlipped ? (
          <StyledFlipItem>
            {/* <img src=`${props.courseIcon}` */}
            <Typography variant="h5">{props.courseTitle}</Typography>
            {/* <FlipIcon /> */}
          </StyledFlipItem>
        ) : (
          <StyledGridItem md={12} lg={12} xl={12} onClick={handleClick}>
            <Typography variant="h4">{props.courseTitle}</Typography>
            <Typography variant="body1">{props.courseInfo}</Typography>
          </StyledGridItem>
        )}
      </>
    );
  }
}
