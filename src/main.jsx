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
import EnrolledCourses from "./Pages/EnrolledCourses/EnrolledCourses.jsx";
import AddCourse from "./Pages/AddCourse/AddCourse.jsx";
import MyAddedCourses from "./Pages/MyAddedCourses/MyAddedCourses.jsx";
import DashboardHome from "./Pages/DashboardHome/DashboardHome.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import Contact from "./Pages/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      { path: "/allCourses", Component: AllCourses },
      { path: "/allCourses/:id", Component: CourseDetails },
      { path: "/contact", Component: Contact },
    ],
  },
  {
    path: "/auth/login",
    Component: Login,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/auth/register",
    Component: Register,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <DashboardHome />
          </PrivateRoute>
        ),
      },
      {
        path: "enrolledCourses",
        element: (
          <PrivateRoute>
            <EnrolledCourses></EnrolledCourses>
          </PrivateRoute>
        ),
      },
      {
        path: "addCourse",
        element: (
          <PrivateRoute>
            <AddCourse></AddCourse>
          </PrivateRoute>
        ),
      },
      {
        path: "addedCourses",
        element: (
          <PrivateRoute>
            <MyAddedCourses></MyAddedCourses>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
