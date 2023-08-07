import './App.css';

import { ThemeProvider } from '@mui/material';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Components/Home';
import InfoLinkPage from './Components/InfoLinkPage';
import NavBar from './Components/NavBar';
import Quiz from './Components/Quiz';
import Receipt from './Components/Receipt';
import ResultsPage from './Components/ResultsPage';
import Team from './Components/Team';
import { CustomTheme } from './Styling/CustomStyling.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/results',
        element: <ResultsPage />,
      },
      {
        path: '/:type/:typeId',
        element: <InfoLinkPage />,
      },
      {
        path: '/quiz/:step',
        element: <Quiz />,
      },
      {
        path: '/receipt',
        element: <Receipt />,
      },
      {
        path: '/team',
        element: <Team />,
      },
    ],
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
