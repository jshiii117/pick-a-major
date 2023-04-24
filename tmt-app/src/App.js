import React from "react";
import "./App.css";
import Home from "./Components/Home";
import { CustomTheme } from "./Styling/CustomStyling.js";
import { ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResultsPage from "./Components/ResultsPage";
import CareerPage from "./Components/CareerPage";
import MajorPage from "./Components/MajorPage";
import Quiz from "./Components/Quiz";
import Receipt from "./Components/Receipt";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/results",
    element: <ResultsPage />,
  },
  {
    path: "/majors",
    element: <MajorPage />,
  },
  {
    path: "/career/:career",
    element: <CareerPage />,
  },
  {
    path: "/quiz/:step",
    element: <Quiz />,
  },
  {
    path: "/receipt",
    element: <Receipt />,
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
