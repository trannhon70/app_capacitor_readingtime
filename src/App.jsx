import { Directory, Encoding, Filesystem } from "@capacitor/filesystem";
import { useEffect, useState } from "react";
import { ReactChannelIO } from "react-channel-plugin";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { Animated } from "./components/Animated";
import PrivateRoute from "./components/PrivateRoute";
import NoAuthRoute from "./components/NoAuthRoute";
import FreeTrial from "./pages/FreeTrial/FreeTrial";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import Login from "./pages/Login/Login";
import Notifications from "./pages/Notifications/Notifications";
import Welcome from "./pages/Welcome/Welcome";
import {
  SocketContext,
  socketInstance,
} from "./context/socketIO/socket.context";
import { getAccessToken } from "./apis/auth";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { useAuth } from "./context/auth/auth.context";

function App() {
  const auth = useAuth();
  const location = useLocation();
  useEffect(() => {
    const isAuth = async () => {
      const assess_token = await getAccessToken();
      if (assess_token !== null) auth.login(assess_token);
      else auth.logout();
    };
    isAuth();
  }, [location.pathname]);

  return (
    <>
      <SocketContext.Provider value={socketInstance}>
        <ReactChannelIO
          pluginKey={"9e2ec8bb-1dac-4ab4-832e-137b7eedb243"}
          language="en"
          autoBoot
          hideChannelButtonOnBoot
        >
          <Animated>
            <Switch>
              <Route exact path="/">
                <NoAuthRoute isAuthenticated={auth.isAuthenticated}>
                  <Home />
                </NoAuthRoute>
              </Route>

              <Route exact path="/home">
                <Layout>
                  <Welcome />
                </Layout>
              </Route>

              <Route exact path="/notification">
                <PrivateRoute isAuthenticated={auth.isAuthenticated}>
                  <Layout>
                    <Notifications />
                  </Layout>
                </PrivateRoute>
              </Route>

              <Route exact path="/register-free-trial">
                <FreeTrial />
              </Route>

              <Route exact path="/login">
                <NoAuthRoute isAuthenticated={auth.isAuthenticated}>
                  <Login />
                </NoAuthRoute>
              </Route>
            </Switch>
          </Animated>
        </ReactChannelIO>

        {/* <Bubble
          typebot="https://typebot.co/lead-generation-0kcdv3y"
          theme={{ button: { backgroundColor: "#0042DA" } }}
        /> */}
      </SocketContext.Provider>
    </>
  );
}

export default App;
