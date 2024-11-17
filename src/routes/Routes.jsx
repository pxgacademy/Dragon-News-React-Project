import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../Root";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Career from "../components/career/Career";
import Login from "../components/loginAndReg/Login";
import Register from "../components/loginAndReg/Register";
import CategoryNews from "../components/home/CategoryNews";
import PrivateRoutes from "./PrivateRoutes";
import NewsDetails from "../components/newsDetails/NewsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Navigate to="category/01" />,
          },
          {
            path: "category/:id",
            element: <CategoryNews />,
            loader: ({ params }) =>
              fetch(
                `https://openapi.programming-hero.com/api/news/category/${params.id}`
              ),
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "career",
        element: <Career />,
      },
    ],
  },
  {
    path: "news/details/:id",
    element: (
      <PrivateRoutes>
        <NewsDetails />
      </PrivateRoutes>
    ),
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);
