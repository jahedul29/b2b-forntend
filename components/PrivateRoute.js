import { getUser } from "../services/auth";
import Router from "next/router";
import {getBrowserWindow} from "../services/global"

const PrivateRoute = async ({ children }) => {
  const user = getUser();
  if (!user?.isAuthenticated && window.location.pathname !== "/login") {
    Router.push("/login");
  }else{
    return children;
  }
  
};

export default PrivateRoute;
