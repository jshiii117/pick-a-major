import React from "react";
import "./App.css";
import Home from "./Components/Home";
import { CustomTheme } from "./Styling/CustomStyling.js";
import { ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CareerGuide from "./Components/CareerGuide";
import Quiz from "./Components/Quiz";
import Results from "./Components/Results";
import Receipt from "./Components/Receipt";
import Majors from "./Components/Majors";

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
    path: "/quiz/:step",
    element: <Quiz />,
  },
  {
    path: "/results",
    element: <Results />,
  },
  {
    path: "/receipt",
    element: <Receipt />,
  },
  {
    path: "/majors",
    element: <Majors />,
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
