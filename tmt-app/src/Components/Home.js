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
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Learn more about other different majors"
              component={RouterLink}
              to="/questionOne"
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
        <Footer />
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

function Footer() {
  return (
    <Container
      sx={{
        marginTop: "15rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
        minWidth: "100vw",
        maxWidth: "100vw",
        height: "100%",
        backgroundColor: CustomTheme.palette.TestBackgroundColor.main,
      }}
    >
      {/*Background*/}
      <img
        src={FooterBackground}
        alt="FooterBackground"
        style={{ width: "100vw", position: "absolute", zIndex: -1 }}
      />
      {/*Content*/}
      <Grid
        container
        display="flex"
        direction="row"
        style={{
          height: "20%",
          flexWrap: "wrap",
          backgroundColor: CustomTheme.palette.TestBackgroundColor.main,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {/*Socials*/}
        <Grid item>
          <Grid container display="flex" direction="column">
            <img src={BTLogo} alt="BTLogo" />
            <Typography
              variant="CustomHeading3"
              style={{ alignSelf: "center" }}
            >
              Check us out on our socials
            </Typography>
            <Grid
              container
              display="flex"
              direction="row"
              style={{ justifyContent: "center" }}
            >
              <Grid item>
                <img src={DiscordIcon} alt="Discord Logo" />
              </Grid>
              <Grid item>
                <img src={InstagramIcon} alt="Instagram Logo" />
              </Grid>
              <Grid item>
                <img src={LinkedInIcon} alt="LinkedIn Logo" />
              </Grid>
              <Grid item>
                <img src={YouTubeIcon} alt="YouTube Logo" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/*Main Links*/}
        <Grid item>
          <Grid container display="flex" direction="column"></Grid>
          <Typography variant="CustomHeading2">Main Links</Typography>
          <Grid container display="flex" direction="row">
            <Grid item>
              <Grid container display="flex" direction="column">
                <Typography variant="CustomBody" style={{ fontWeight: "bold" }}>
                  Learn More
                </Typography>
                {LEARNMOREPAGES.map((page) => (
                  <Typography key={page.pageName} variant="CustomBody">
                    {page.pageName}
                  </Typography>
                ))}
              </Grid>
            </Grid>
            <div style={{ width: 20 }} />
            <Grid item>
              <Grid container display="flex" direction="column">
                <Typography variant="CustomBody" style={{ fontWeight: "bold" }}>
                  Get in Touch
                </Typography>
                {GETINTOUCHPAGES.map((page) => (
                  <Typography key={page.pageName} variant="CustomBody">
                    {page.pageName}
                  </Typography>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/*Major Team Guide*/}
        <Grid item>
          <Grid container display="flex" direction="column">
            <Typography variant="CustomHeading2">Major Team Guide</Typography>
            <Grid container display="flex" direction="column">
              {MAJORGUIDETEAM.map((team, index) => (
                <React.Fragment key={index}>
                  {team.members.map((member) => (
                    <Typography key={member.name} variant="CustomBody">
                      <span style={{ fontWeight: "bold" }}>{member.role}</span>{" "}
                      {member.name}
                    </Typography>
                  ))}
                  {index !== MAJORGUIDETEAM.length - 1 && (
                    <div style={{ height: 20 }} />
                  )}
                </React.Fragment>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
