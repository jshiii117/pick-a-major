import React from "react";
import "../Styling/Home.css";
import {
  FlexContainer,
  PrimaryButton,
  CustomTheme,
} from "../Styling/CustomStyling.js";
import { Link, Container, Typography, Grid, Center } from "@mui/material";
import MilkTeaBlob from "../Images/MilkTeaBlob.png";
import LycheeRectangle from "../Images/LycheeRectangle.png";
import MilkTeaSwiggle2 from "../Images/MilkTeaSwiggle2.png";
import ThaiTeaSwiggle1 from "../Images/ThaiTeaSwiggle1.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Breadcrumb from "./Breadcrumb";
import { Link as RouterLink } from "react-router-dom";
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

function Home() {
  return (
    <React.Fragment>
      <Container
        sx={{
          minWidth: "100%",
          paddingTop: "7.5rem",
          overflow: "hidden",
          minHeight: "100vh",
        }}
      >
        <Breadcrumb />
        <FlexContainer sx={{ paddingY: "6.25rem" }}>
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
          <FlexContainer sx={{ flexDirection: "column", position: "none" }}>
            <Container sx={{ textAlign: "center", paddingBottom: "1.5rem" }}>
              <Typography variant="CustomTitle" sx={{ color: "Boba.main" }}>
                Can&apos;t decide between majoring in business, biology, or art?
              </Typography>
            </Container>
            <Container
              sx={{ textAlign: "center", marginY: "1.75rem" }}
              maxWidth="md"
            >
              <Typography variant="CustomHeading3">
                No one can master multiple subjects the way you do. Spend 2
                minutes with us to find the perfect major for you!
              </Typography>
            </Container>
          </FlexContainer>
        </FlexContainer>
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
          <FlexContainer
            sx={{
              flexDirection: "column",
              height: "auto",
            }}
          >
            <Link
              sx={{ color: "Boba.main" }}
              underline="none"
              rel="noopener noreferrer"
              aria-label="Learn more about other different majors"
              component={RouterLink}
              to="/questions"
            >
              <PrimaryButton buttonText={"Take the Quiz"}></PrimaryButton>
            </Link>
            <div className="Home_Button_Main_Link">
              <Link
                sx={{ color: "Boba.main" }}
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Learn more about other different majors"
                component={RouterLink}
                to="/guide"
              >
                <Typography variant="CustomSubHeading">
                  See all Majors/Careers
                </Typography>
              </Link>
              <ArrowDownwardIcon
                sx={{ paddingTop: "3px", paddingLeft: "10px" }}
              />
            </div>
          </FlexContainer>
        </FlexContainer>
        {/*All Careers & Majors Section */}
        <Container>
          <Grid
            display="flex"
            direction="row"
            style={{
              minWidth: "80%",
              alignItems: "center",
              justifyContent: "space-between",
              minHeight: "100vh",
              backgroundColor: CustomTheme.palette.TestBackgroundColor.main,
            }}
          >
            <Grid item lg={5}>
              <CareerMajorInfo />
            </Grid>
            <Grid item lg={3}>
              <MajorGuide />
            </Grid>
          </Grid>
        </Container>
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

export default Home;
