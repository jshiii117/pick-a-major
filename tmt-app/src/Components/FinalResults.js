import React from "react";
import "../Styling/Home.css";
import {
  FlexContainer,
  PrimaryButton,
  CustomTheme,
} from "../Styling/CustomStyling.js";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
  alpha,
  Divider,
} from "@mui/material";
import MilkTeaBlob from "../Images/MilkTeaBlob.png";
import EducationIcon from "../Images/icons/education.svg";
import Breadcrumb from "./Breadcrumb";
import { useNavigate } from "react-router-dom";
import {
  LEARNMOREPAGES,
  CAREERSINFO,
  MAJORSINFO,
  GETINTOUCHPAGES,
  MAJORGUIDETEAM,
} from "../Data/constants";
import BobaBot3 from "../Images/BobaBot3.png";
import FooterBackground from "../Images/FooterBackground.png";
import BTLogo from "../Images/BTLogo.png";
import DiscordIcon from "../Images/DiscordIcon.png";
import InstagramIcon from "../Images/InstagramIcon.png";
import LinkedInIcon from "../Images/LinkedInIcon.png";
import YouTubeIcon from "../Images/YouTubeIcon.png";
import CustomFooter from "./CustomFooter";

function FinalResults() {
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
        }}
      >
        {/*All Careers & Majors Section */}
        <Grid
          direction="row"
          display="flex"
          style={{
            minWidth: "80%",
            alignItems: "space-between",
            justifyContent: "space-evenly",
          }}
        >
          {/*Left-hand side content */}
          <Grid item sx={{ maxWidth: "50%" }}>
            <Grid
              direction="column"
              display="flex"
              style={{
                justifyContent: "start",
                minHeight: "100vh",
                backgroundColor: CustomTheme.palette.ThaiTea.main,
              }}
            >
              <Grid
                container
                direction="row"
                display="flex"
                sx={{
                  maxWidth: "100%",
                  alignItems: "center",
                  justifyContent: "start",
                  backgroundColor: CustomTheme.palette.TestBackgroundColor.main,
                }}
              >
                <Typography variant="CustomHeading2">
                  Careers and Majors
                </Typography>
                <div style={{ width: 20 }} />
                <Typography
                  variant="Customheading3"
                  sx={{ fontWeight: "bold" }}
                >
                  Explore majors, careers, and more
                </Typography>
              </Grid>
              <div style={{ height: 80 }} />

              <Typography variant="CustomHeading3">Quiz Results</Typography>
              <div style={{ height: 40 }} />

              <ResultCard />
              <div style={{ height: 20 }} />
              <ResultCard />
              <div style={{ height: 40 }} />
              <Divider />
              <div style={{ height: 40 }} />
              <CareerMajorInfo />
            </Grid>
          </Grid>

          {/*Right-hand side content */}
          <Grid item lg={3} md={3} sm={5} xs={5}>
            <Grid
              direction="column"
              display="flex"
              style={{
                minWidth: "80%",
                alignItems: "center",
                justifyContent: "space-between",
                minHeight: "100vh",
              }}
            >
              <Grid item xl={3}>
                <MajorGuide />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <CustomFooter />
      </Container>
    </React.Fragment>
  );
}

function CareerMajorInfo() {
  return (
    <Container>
      <Typography variant="CustomHeading3">All Careers & Majors</Typography>
      <div style={{ height: 40 }} />
      <Grid container display="flex" direction="row">
        {/*Careers column*/}
        <Grid item>
          <Grid container display="flex" direction="column">
            <Typography variant="CustomHeading2">Majors</Typography>
            {MAJORSINFO.map((major) => (
              <Typography key={major.title} style={{ marginBottom: 8 }}>
                {major.title}
              </Typography>
            ))}
          </Grid>
        </Grid>
        <div style={{ width: 80 }} />
        {/*Majors column*/}
        <Grid item>
          <Grid container display="flex" direction="column">
            <Typography variant="CustomHeading2">Careers</Typography>
            {CAREERSINFO.map((career) => (
              <Typography key={career.title} style={{ marginBottom: 8 }}>
                {career.title}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

function MajorGuide() {
  return (
    <Container>
      <Grid
        container
        display="flex"
        direction="column"
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item>
          <Typography variant="CustomTitle" sx={{ textAlign: "center" }}>
            Major <br />
            Guide
          </Typography>
        </Grid>
        <div style={{ height: 20 }} />
        <Grid item>
          <Typography variant="CustomHeading2" style={{ textAlign: "center" }}>
            Explore majors, <br />
            careers, & more
          </Typography>
        </Grid>
        <div style={{ height: 20 }} />
        <Grid item>
          <Container
            sx={{
              backgroundColor: CustomTheme.palette.TestBackgroundColor.main,
              alignContent: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <img src={BobaBot3} alt="BobaBot" style={{ width: "60%" }} />
          </Container>
        </Grid>
        <div style={{ height: 40 }} />
        <Grid item>
          <PrimaryButton buttonText={"Take The Quiz"} maxWidth={300} />
        </Grid>
      </Grid>
    </Container>
  );
}

function ResultCard() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/education");
  }
  return (
    <Card
      sx={{
        display: "flex",
        maxWidth: "100%",
        minHeight: "160px",
        marginX: "20px",
        backgroundColor: CustomTheme.palette.Matcha.main,
        alignItems: "center",
        paddingX: 4,
        justifyfItems: "center",
        borderRadius: 4,
      }}
    >
      <CardMedia sx={{ mr: 3 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100px",
            height: "100px",
            backgroundColor: "#A2B79C",
            borderRadius: "16px",
          }}
        >
          <img
            src={EducationIcon}
            alt={"Education Icon"}
            style={{ width: "30%", height: "30%" }}
          />
        </Box>
      </CardMedia>
      <CardContent sx={{ width: "64%", overflow: "hidden" }}>
        <Typography variant="CustomHeading2" sx={{ color: "white" }}>
          Education
        </Typography>
        <Typography
          variant="body1"
          color="white"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            mb: 2,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta
          augue justo, vel feugiat neque dictum non. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed
          ac elit vitae elit euismod bibendum. Praesent eget est mi. Sed sit
          amet libero eu mauris malesuada bibendum vel vitae mauris. Duis
          consequat nunc in mauris pharetra euismod. Sed cursus interdum neque,
          a vestibulum erat tincidunt in. Nullam in mollis ipsum. Nulla at nibh
          auctor, imperdiet mi eget, placerat velit.
        </Typography>
        <Button sx={{ padding: 0 }} onClick={handleClick}>
          <Typography variant="body1" sx={{ color: "white" }}>
            READ MORE
          </Typography>
        </Button>
      </CardContent>
      {/* <Box sx={{ width: "10%" }}>
        <img src="small_logo.png" alt="small logo" />
      </Box> */}
    </Card>
  );
}

export default FinalResults;
