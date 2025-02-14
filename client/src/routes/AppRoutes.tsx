import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import App from "../App";
import HomeDashboard from "../pages/HomeDashboard/HomeDashboard";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "home", element: <HomeDashboard /> }, // todo - :userId will need to be added
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
