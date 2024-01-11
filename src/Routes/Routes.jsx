import { createBrowserRouter } from "react-router-dom"
import Root from "../Layouts/Root"
import Home from "../Pages/Homes/Home/Home"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import PrivateRoute from "./PrivateRoute"
import Secret from "../Shared/Secret/Secret"
import Dashboard from "../Layouts/Dashboard"
import Survey from "../Pages/Dashboard/Survey/Survey"
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers"
import SurveyorHome from "../Pages/Dashboard/SurveyorHome/SurveyorHome"
import AddSurvey from "../Pages/Dashboard/AddSurvey/AddSurvey"
import AdminRoute from "./AdminRoute"
import SurveyorRoute from "./SurveyorRoute"
import ManageSurvey from "../Pages/Dashboard/ManageSurvey/ManageSurvey"
import UpdateSurvey from "../Pages/Dashboard/UpdateSurvey/UpdateSurvey"
import AllSurvey from "../Shared/AllSurvey/AllSurvey"
import SurveyDetails from "../components/SurveyDetails/SurveyDetails"
import Payment from "../Pages/Dashboard/Payment/Payment"
import PaymentCart from "../Pages/Homes/PaymentCart/PaymentCart"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "paymentCart",
        element: (
          <PrivateRoute>
            <PaymentCart></PaymentCart>
          </PrivateRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
      {
        path: "allSurvey",
        element: <AllSurvey></AllSurvey>,
        // loader: () => fetch('http://localhost:5000/survey'),
      },
      {
        path: "/surveyDetails/:id",
        element: <SurveyDetails></SurveyDetails>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "survey",
        element: <Survey></Survey>,
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },

      // Surveyor related route
      {
        path: "surveyorHome",
        element: (
          <SurveyorRoute>
            <SurveyorHome></SurveyorHome>
          </SurveyorRoute>
        ),
      },
      {
        path: "addSurvey",
        element: (
          <SurveyorRoute>
            <AddSurvey></AddSurvey>
          </SurveyorRoute>
        ),
      },
      {
        path: "manageSurvey",
        element: (
          <SurveyorRoute>
            <ManageSurvey></ManageSurvey>
          </SurveyorRoute>
        ),
      },
      {
        path: "updateSurvey/:id",
        element: (
          <SurveyorRoute>
            <UpdateSurvey></UpdateSurvey>
          </SurveyorRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/survey/${params.id}`),
      },
    ],
  },
])
