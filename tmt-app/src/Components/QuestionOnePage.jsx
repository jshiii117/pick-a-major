import React, { useState } from "react";
import "../Styling/Home.css";
import {
  FlexContainer,
  CustomTheme,
  PrimaryButton,
  InversePrimaryButton,
  SecondaryButton,
} from "../Styling/CustomStyling.js";
import { Container, Typography, Grid } from "@mui/material";
import MilkTeaBlob from "../Images/MilkTeaBlob.png";
import LycheeRectangle from "../Images/LycheeRectangle.png";
import MilkTeaSwiggle2 from "../Images/MilkTeaSwiggle2.png";
import ThaiTeaSwiggle1 from "../Images/ThaiTeaSwiggle1.png";
import { COURSEINFO, SOFTSKILLINFO } from "../Data/constants";
import HexagonIcon from "@mui/icons-material/Hexagon";
import DiscreteProgressBar from "./ProgressBar";
import BobaBot from "../Images/BobaBot.png";
import BobaBot1 from "../Images/BobaBot1.png";
// import { FlipIcon } from "@mui/icons-material/Flip"

const QuestionItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const style = {
    margin: "0.6rem",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    width: "240px",
    height: isHovered ? "148px" : "152px",
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
      key={item.title}
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
      style={style}
    >
      {isHovered ? (
        <>
          <Typography variant="CustomHeading3" style={{ color: "black" }}>
            {item.title}
          </Typography>
          <Typography
            variant="CustomHeading4"
            style={{ color: "black", textAlign: "center" }}
          >
            {item.info}
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
            {item.title}
          </Typography>
        </>
      )}
    </Grid>
  );
};

function Questions() {
  const [view, setView] = useState(0);

  const onContinue = () => {
    console.log("handle onContinue");
    setView(view + 1);
  };

  const onBack = () => {
    console.log("handle onBack");
    setView(view - 1);
  };

  const renderView = () => {
    switch (view) {
      case 0:
        return <QuestionOne />;
      case 1:
        return <QuestionTwo />;
      default:
        return null;
    }
  };

  return (
    <Container
      sx={{
        minWidth: "100%",
        // paddingTop: "7.5rem",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* <Breadcrumb /> */}
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
          {/*Back button and progress bar */}
          <Container
            style={{
              width: "85%",
              backgroundColor: CustomTheme.palette.TestBackgroundColor.main,
            }}
          >
            <Grid
              container
              direction="row"
              display="flex"
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Grid item>
                <SecondaryButton buttonText={"Back"} onClick={onBack} />
              </Grid>
              <Grid item>
                <DiscreteProgressBar />
              </Grid>
            </Grid>
          </Container>
          <div style={{ height: 60 }} />
          {renderView()}
          <div style={{ height: 20 }} />
          {/*Back and Continue buttons*/}
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
              <InversePrimaryButton buttonText={"Back"} onClick={onBack} />
              <PrimaryButton buttonText={"Continue"} onClick={onContinue} />
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

export default Questions;

function QuestionOne() {
  return (
    <React.Fragment>
      {/*Short text summary and icon */}
      <Container
        style={{
          width: "85%",
          backgroundColor: CustomTheme.palette.TestBackgroundColor.main,
        }}
      >
        <Grid
          container
          direction="row"
          display="flex"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item>
            <Grid container direction="column" display="flex">
              <Typography variant="CustomHeading2">
                Let&apos;s order some boba! Pick your base(s).
              </Typography>
              <div style={{ height: 30 }} />
              <Typography variant="CustomHeading2">
                What university classes sound interesting to you?
              </Typography>
              <Typography
                variant="CustomSubHeading"
                color={CustomTheme.palette.ThaiTea.main}
              >
                Select more than 3.
              </Typography>
              <div style={{ height: 40 }} />
            </Grid>
          </Grid>
          <Grid item alignSelf="start">
            <Container
              style={{
                minWidth: 140,
                minHeight: 180,
                backgroundColor: CustomTheme.palette.ThaiTea.main,
              }}
            >
              <img src={BobaBot} alt="BobaBot" />
            </Container>
          </Grid>
        </Grid>
      </Container>
      <div style={{ height: 20 }} />
      {/*Selection area*/}
      <Container
        style={{
          width: "90%",

          backgroundColor: CustomTheme.palette.TestBackgroundColor.main,
        }}
      >
        <Grid
          container
          display="flex"
          sx={{
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {COURSEINFO.map((course) => (
            <QuestionItem key={course.title} item={course} />
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

function QuestionTwo() {
  return (
    <React.Fragment>
      {/*Short text summary and icon */}
      <Container
        style={{
          width: "85%",
          backgroundColor: CustomTheme.palette.TestBackgroundColor.main,
        }}
      >
        <Grid
          container
          direction="row"
          display="flex"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item>
            <Grid container direction="column" display="flex">
              <Typography variant="CustomHeading2">
                Pick your toppings and add-ons.
              </Typography>
              <div style={{ height: 30 }} />
              <Typography variant="CustomHeading2">
                What skills would you like to use in a career?
              </Typography>
              <Typography
                variant="CustomSubHeading"
                color={CustomTheme.palette.ThaiTea.main}
              >
                Select more than one.
              </Typography>
              <div style={{ height: 40 }} />
            </Grid>
          </Grid>
          <Grid item alignSelf="start">
            <Container
              style={{
                minWidth: 140,
                minHeight: 180,
                backgroundColor: CustomTheme.palette.ThaiTea.main,
              }}
            >
              <img src={BobaBot1} alt="BobaBot" />
            </Container>
          </Grid>
        </Grid>
      </Container>
      <div style={{ height: 20 }} />
      {/*Selection area*/}
      <Container
        style={{
          width: "90%",

          backgroundColor: CustomTheme.palette.TestBackgroundColor.main,
        }}
      >
        <Grid
          container
          display="flex"
          sx={{
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {SOFTSKILLINFO.map((skill) => (
            <QuestionItem key={skill.title} item={skill} />
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
