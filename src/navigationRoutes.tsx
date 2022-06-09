import { Error404 } from "./screens/404";
import { DashboardScreen } from "./screens/Dashboard";
import { SportsScreen } from "./screens/Sports";
import {Navigate} from "react-router-dom";

type NavigationRoute = {
  path: string;
  element: JSX.Element;
};
type NavigationRoutes = Record<string, NavigationRoute>;

export const navigationRoutes: NavigationRoutes = {
  dashboard: {
    path: "/",
    element: <DashboardScreen />,
  },
  sports: {
    path: "/sports",
    element: <SportsScreen />,
  },
  competitions:{
    path: "/competitions",
    element: <Error404 />,
  },
  scheduling:{
    path: "/scheduling",
    element: <Error404 />,
  },
  organisations:{
    path: "/organisations",
    element: <Error404 />,
  },
  users:{
    path: "/users",
    element: <Error404 />,
  },
  missingDashboard:{
    path: "/dashboard",
    element: <Navigate to={"/"} replace/>,
  },


};
