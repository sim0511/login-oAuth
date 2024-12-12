import Availability from "../pages/Availability";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Log from "../pages/Info";
import Register from "../pages/Register"

const routes = [
  {
    path: "/",
    element: <Login />,
    isProtected: false,
  },
  {
    path: "/login",
    element: <Login />,
    isProtected: false,
  },
  {
    path:"/register",
    element:<Register />,
    isProtected:false
  },
 {
    path:"/availability",
    element: <Availability />,
    isProtected: true,
 },
 {
    path:"/log",
    element: <Log />,
    isProtected: true
 },
  {
    path: "*",
    element: <NotFound />,
    isProtected: false,
  },
];

export default routes;
