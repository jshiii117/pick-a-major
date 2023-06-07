import React, { useRef } from "react";
import { PrimaryBtn, FlexContainer } from "../Styling/CustomStyling";
import { Link, Container, Typography, Button, Box } from "@mui/material";
import MilkTeaBlob from "../Images/MilkTeaBlob.png";
import LycheeRectangle from "../Images/LycheeRectangle.png";
import MilkTeaSwiggle2 from "../Images/MilkTeaSwiggle2.png";
import ThaiTeaSwiggle1 from "../Images/ThaiTeaSwiggle1.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MajorCareerList from "./MajorCareerList";
import GuideSidebar from "./GuideSidebar";
import { Link as RouterLink } from "react-router-dom";

function Home() {
  const scrollToList = useRef(null);
  const toggleDisplayGuide = () => {
    scrollToList.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container
      sx={{
        minWidth: "100%",
        minHeight: "100vh",
        overflowX: {
          xs: "hidden",
        },
      }}
    >
      <FlexContainer sx={{ paddingY: "6.25rem" }}>
        <Container
          sx={{
            position: "absolute",
            top: "0",
            zIndex: "-1500",
            minWidth: "1585px",
            paddingY: "2rem",
          }}
        >
          <img
            src={MilkTeaBlob}
            alt="MilkTeaBlob"
            style={{
              position: "relative",
              top: "0",
              width: "100%",
              height: "575px",
              transform: "rotateX(180deg)",
            }}
          />
        </Container>
        <FlexContainer sx={{ flexDirection: "column", position: "none" }}>
          <Container sx={{ textAlign: "center", paddingBottom: "1.5rem" }}>
            <Typography variant="h1" sx={{ color: "Boba.main" }}>
              Can&apos;t decide between majoring in business, biology, or art?
            </Typography>
          </Container>
          <Container
            sx={{ textAlign: "center", marginY: "1.75rem" }}
            maxWidth="md"
          >
            <Typography variant="h4">
              No one can master multiple subjects the way you do. Spend 2
              minutes with us to find the perfect major for you!
            </Typography>
          </Container>
        </FlexContainer>
      </FlexContainer>

      <FlexContainer sx={{ minWidth: "100%" }}>
        <FlexContainer
          sx={{
            position: "absolute",
            justifyContent: "space-between",
            flexDirection: "row",
            zIndex: "-1000",
            minWidth: "100%",
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: "25vh",
            }}
          >
            <img
              src={LycheeRectangle}
              alt="LycheeRectangle"
              style={{
                width: "50%",
                verticalAlign: "middle",
                transform: "rotate(133.23deg)",
                position: "absolute",
                top: "-100%",
                left: "-60%",
              }}
            />
            <img
              src={MilkTeaSwiggle2}
              alt="MilkTeaSwiggle2"
              style={{
                width: "100%",
                transform: "rotate(32.27deg)",
                position: "relative",
                left: "-55%",
                top: "-50%",
              }}
            />
          </Box>
          <Box
            sx={{
              position: "relative",
              right: "-7%",
              display: {
                xs: "none",
                md: "none",
                lg: "block",
              },
            }}
          >
            <img
              src={ThaiTeaSwiggle1}
              alt="ThaiTeaSwiggle1"
              style={{
                width: "100%",
                transform: "rotate(-33.7deg)",
              }}
            />
          </Box>
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
            aria-label="Learn more about other different majors"
            component={RouterLink}
            to="/quiz/classes"
          >
            <PrimaryBtn sx={{ color: "#FFFFFF" }}>
              <Typography variant="h3">Take the Quiz</Typography>
            </PrimaryBtn>
          </Link>

          <FlexContainer sx={{ marginTop: "4.5rem", flexDirection: "column" }}>
            <Button
              onClick={toggleDisplayGuide}
              sx={{
                color: "black",
                textDecoration: "underline",
              }}
            >
              <Typography variant="h5">See all Majors/Careers</Typography>
              <ArrowDownwardIcon
                sx={{ paddingTop: "3px", paddingLeft: "10px" }}
              />
            </Button>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer
        sx={{
          marginY: "5rem",
          padding: "3rem 1rem 0 1rem",
          position: "relative",
          zIndex: "1500",
          minWidth: "100%",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
        ref={scrollToList}
      >
        <Typography display="block" variant="h4">
          All Majors & Careers
        </Typography>
        <FlexContainer
          sx={{
            alignItems: "flex-start",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
            },
            justifyContent: "center",
            minWidth: "100%",
          }}
        >
          <MajorCareerList />
          <GuideSidebar toggleButton={false} />
        </FlexContainer>
      </FlexContainer>
    </Container>
  );
}

export default Home;
