import React from 'react';
import Landing from './pages/Landing';
import Game, { gameLoader } from './pages/Game';
import Error from './pages/Error';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "/game/:gameId",
    element: <Game />,
    loader: gameLoader,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}


export default App;
