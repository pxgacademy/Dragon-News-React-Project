import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import APIcontext from "./utils/APIcontext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <APIcontext>
      <RouterProvider router={router} />
    </APIcontext>
      <ToastContainer position="top-center" autoClose={3000} />
  </StrictMode>
);
