import React from "react";
import "./App.css";
import Home from "./Components/Home";
import { CustomTheme } from "./Styling/CustomStyling.js";
import { ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CareerGuide from "./Components/CareerGuide";
import Questions from "./Components/Questions";
import FinalResults from "./Components/FinalResults";
import EducationInfo from "./Components/EducationInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/guide",
    element: <CareerGuide />,
  },
  {
    path: "/questions",
    element: <Questions />,
  },
  {
    path: "/results",
    element: <FinalResults />,
  },
  {
    path: "/education",
    element: <EducationInfo />,
  },
]);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={CustomTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
