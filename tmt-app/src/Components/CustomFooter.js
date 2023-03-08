import React from "react";
import "../Styling/Home.css";
import { CustomTheme } from "../Styling/CustomStyling.js";
import { Container, Typography, Grid } from "@mui/material";
import {
  LEARNMOREPAGES,
  GETINTOUCHPAGES,
  MAJORGUIDETEAM,
} from "../Data/constants";

import BTLogo from "../Images/BTLogo.png";
import DiscordIcon from "../Images/DiscordIcon.png";
import InstagramIcon from "../Images/InstagramIcon.png";
import LinkedInIcon from "../Images/LinkedInIcon.png";
import YouTubeIcon from "../Images/YouTubeIcon.png";
import FooterBackground from "../Images/FooterBackground.png";

export default function CustomFooter() {
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
