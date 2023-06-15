import * as React from "react";
import { useLocation } from "react-router-dom";
import { CustomTheme } from "../Styling/CustomStyling";
import HomeIcon from "../Images/icons/boba_progress/Home_Current.png";
import SubjectsIcon from "../Images/icons/boba_progress/Subjects_Current.png";
import SoftSkillsIcon from "../Images/icons/boba_progress/SoftSkills_Current.png";
import OrderUpIcon from "../Images/icons/boba_progress/OrderUp_Current.png";
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  stepConnectorClasses,
  styled,
} from "@mui/material";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#1B1D2E",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#1B1D2E",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 12,
    border: 0,
    backgroundColor: CustomTheme.palette.BobaHighlight.main,
    borderRadius: 0,
  },
}));

const ColorlibStepIconRoot = styled("div")(() => ({
  zIndex: 1,
  height: 40,
  display: "flex",
  justifyItems: "center",
  alignItems: "center",
  overflow: "visible",
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <img width="140px" src={HomeIcon} alt="Home" />,
    2: <img width="140px" src={SubjectsIcon} alt="Subjects" />,
    3: <img width="140px" src={SoftSkillsIcon} alt="Soft Skills" />,
    4: <img width="140px" src={OrderUpIcon} alt="Order Up" />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      <div style={{ marginTop: "1.0rem" }}>{icons[String(props.icon)]}</div>
    </ColorlibStepIconRoot>
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
      connector={<ColorlibConnector />}
    >
      {[1, 2, 3, 4].map((label) => (
        <Step key={label}>
          <StepLabel StepIconComponent={ColorlibStepIcon} />
        </Step>
      ))}
    </Stepper>
  );
}
