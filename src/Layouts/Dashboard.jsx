import { NavLink, Outlet } from "react-router-dom"
import useAdmin from "../hooks/useAdmin"
import useSurveyor from "../hooks/useSurveyor"

const Dashboard = () => {
  const [isAdmin] = useAdmin()
  const [isSurveyor] = useSurveyor()
  // const isAdmin = true
  return (
    <div className="flex max-w-6xl mx-auto my-10">
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu">
          {isAdmin && (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">All Users</NavLink>
              </li>
            </>
          )}
          {isSurveyor && (
            <>
              <li>
                <NavLink to="/dashboard/surveyorHome">Surveyor Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addSurvey">Add Survey</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageSurvey">Manage Survey</NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink to="/dashboard/userHome">User Home</NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {/* <li>
            <NavLink to="/order/salad">Menu</NavLink>
          </li> */}
          <li>
            <NavLink to="/order/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Dashboard
