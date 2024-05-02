import type { FC } from "react";
import React, { useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import Layout from "../pages/Layout/Layout";

interface PrivateRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children, isAuthenticated }) => {
  const history = useHistory();
  if (isAuthenticated) {
    return <>{children}</>;
  }

  useEffect(() => {
    if (!isAuthenticated) {
      history.push("/login");
    }
  }, [isAuthenticated]);
};

export default PrivateRoute;
