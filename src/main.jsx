import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import RootLayout from "./Layouts/RootLayout/RootLayout.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./Pages/Home/Home.jsx";
import AllCourses from "./Pages/AllCourses/AllCourses.jsx";
import CourseDetails from "./Pages/CourseDetails/CourseDetails.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import DashboardLayout from "./Layouts/DashboardLayout/DashboardLayout.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/courses"),
        Component: Home,
      },
      { path: "/allCourses", Component: AllCourses },
      { path: "/allCourses/:id", Component: CourseDetails },
    ],
  },
  {
    path: "/auth/login",
    Component: Login,
  },
  {
    path: "/auth/register",
    Component: Register,
  },
  {
    path: "/dashboard",
    element:<PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
