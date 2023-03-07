import { styled, Button, Container, createTheme } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";

export const CustomTheme = createTheme({
  palette: {
    BTMilkTea: {
      main: "#F2DAC4",
    },
    Lychee: {
      main: "#F6A794",
    },
    ThaiTea: {
      main: "#E0A878",
    },
    Matcha: {
      main: "#73956F",
    },
    RedBean: {
      main: "#732C2C",
    },
    BobaHighlight: {
      main: "#616587",
    },
    InactiveGrey: {
      main: "#5B5D6C",
    },
    Boba: {
      main: "#1B1D2E",
    },
    TestBackgroundColor: {
      main: "rgba(100, 50, 150, 0.2)",
    },
  },
  typography: {
    CustomTitle: {
      fontFamily: "Poppins",
      fontWeight: 700,
      fontSize: "64px",
      lineHeight: "96px",
      "@media (max-width:1350px)": {
        fontWeight: 700,
        fontSize: "52px",
        lineHeight: "72px",
      },
      "@media (max-width:1050px)": {
        fontWeight: 700,
        fontSize: "42px",
        lineHeight: "52px",
      },
      "@media (max-width:750px)": {
        fontWeight: 700,
        fontSize: "32px",
        lineHeight: "38px",
      },
    },
    CustomHeading1: {
      fontFamily: "Poppins",
      fontWeight: 700,
      fontSize: "36px",
      lineHeight: "54px",
    },
    CustomHeading2: {
      fontFamily: "Poppins",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "48px",
      "@media (max-width:1350px)": {
        fontWeight: 700,
        fontSize: "28px",
        lineHeight: "42px",
      },
      "@media (max-width:1050px)": {
        fontWeight: 700,
        fontSize: "24px",
        lineHeight: "38px",
      },
      "@media (max-width:750px)": {
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: "34px",
      },
    },
    CustomHeading3: {
      fontFamily: "Poppins",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "36px",
      "@media (max-width:1350px)": {
        fontWeight: 600,
        fontSize: "20px",
        lineHeight: "30px",
      },
      "@media (max-width:750px)": {
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "24px",
      },
    },
    CustomSubHeading: {
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "30px",
    },
    CustomBody: {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
    },
    CustomOverline: {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
      },
    },
  },
});

export const PrimaryBtn = styled(Button)({
  color: "#FFFFFF",
  backgroundColor: "#73956F",
  borderRadius: "8px",
  border: 0,
  padding: "1rem 5rem",
  "&:hover": {
    backgroundColor: "#732C2C",
  },
  "@media (max-width:1350px)": {
    padding: "1rem 4rem",
  },
  "@media (max-width:1050px)": {
    padding: "1rem 3rem",
  },
  "@media (max-width:750px)": {
    padding: "1rem 2rem",
  },
});

export const FlexContainer = styled(Container)({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "100%",
});

export const InversePrimaryButton = ({ buttonText, onClick }) => {
  return (
    <Button
      onClick={onClick}
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

export const PrimaryButton = ({ buttonText, onClick }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        width: 350,
        height: 100,
        backgroundColor: CustomTheme.palette.Matcha.main,
        border: "4px solid #FFFFFF",
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
      <Typography variant="CustomHeading2" sx={{ color: "#FFFFFF" }}>
        {buttonText}
      </Typography>
    </Button>
  );
};

export const SecondaryButton = ({ buttonText, onClick }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        width: 160,
        height: 80,
        backgroundColor: CustomTheme.palette.Matcha.main,
        border: "4px solid #FFFFFF",
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
      <Typography variant="CustomHeading2" sx={{ color: "#FFFFFF" }}>
        {buttonText}
      </Typography>
    </Button>
  );
};
