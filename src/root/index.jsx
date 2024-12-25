import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Section1 from "../components/section1";
import Section2 from "../components/section2";
import Section3 from "../components/section3";

export const root = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Section1 />,
      },
      {
        path: "section",
        element: <Section2 />,
      },
      {
        path: "section3",
        element: <Section3 />,
      },
    ],
  },
]);
