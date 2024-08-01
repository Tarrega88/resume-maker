import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/home/Home";
import AppLayout from "./ui/AppLayout";
import ErrorPage from "./ui/ErrorPage";
import DocumentCreator from "./features/Creator/DocumentCreator";
// import SvgRenderer from "./features/svg/SvgRenderer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "/test",
      //   element: <SvgRenderer />,
      // },
      {
        path: "/creator",
        element: <DocumentCreator />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
