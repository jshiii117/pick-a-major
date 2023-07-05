import * as React from "react";
import { useLocation } from "react-router-dom";
import HomeIcon from "../Images/icons/boba_progress/Home.svg";
import SubjectsIcon from "../Images/icons/boba_progress/Subjects.svg";
import SoftSkillsIcon from "../Images/icons/boba_progress/SoftSkills.svg";
import OrderUpIcon from "../Images/icons/boba_progress/OrderUp.svg";
import {
  Container,
  Step,
  StepConnector,
  stepConnectorClasses,
  StepLabel,
  Stepper,
  styled,
} from "@mui/material";

const ProgressConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.Text.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.Text.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    backgroundColor: theme.palette.BobaHighlight.main,
    border: 0,
    borderRadius: 0,
    height: 12,
  },
}));

function ProgressIcon(props) {
  const icons = {
    1: <img width="64px" src={HomeIcon} alt="Home" />,
    2: <img width="64px" src={SubjectsIcon} alt="Subjects" />,
    3: <img width="64px" src={SoftSkillsIcon} alt="Soft Skills" />,
    4: <img width="64px" src={OrderUpIcon} alt="Order Up" />,
  };

  return (
    <Container
      sx={{
        alignItems: "center",
        display: "flex",
        height: 40,
        justifyItems: "center",
        overflow: "visible",
        zIndex: 1,
      }}
    >
      <div>{icons[String(props.icon)]}</div>
    </Container>
  );
}

export default function QuizStepper() {
  const location = useLocation();

  let activeStep;
  switch (location.pathname) {
    case "/quiz/classes":
      activeStep = 1;
      break;
    case "/quiz/skills":
      activeStep = 2;
      break;
    case "/receipt":
      activeStep = 3;
      break;
    default:
      activeStep = 0;
  }

  return (
    <Stepper
      alternativeLabel
      activeStep={activeStep}
      connector={<ProgressConnector />}
    >
      {[1, 2, 3, 4].map((label) => (
        <Step key={label}>
          <StepLabel StepIconComponent={ProgressIcon} />
        </Step>
      ))}
    </Stepper>
  );
}
