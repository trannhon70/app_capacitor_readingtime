import type { FC } from "react";
import React, { Component, useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import Layout from "../pages/Layout/Layout";

interface NoAuthRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

const NoAuthRoute: FC<NoAuthRouteProps> = ({ children, isAuthenticated }) => {
  const history = useHistory();
  if (!isAuthenticated) {
    return <>{children}</>;
  }

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/home");
    }
  }, []);
};

export default NoAuthRoute;
