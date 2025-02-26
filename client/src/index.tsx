import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/main.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoutes";
import { ThemeProvider } from "./context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
