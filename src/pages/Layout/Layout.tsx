import type { FC } from "react";
import React from "react";
import { useChannelIOApi } from "react-channel-plugin";
import { CgProfile } from "react-icons/cg";
import { TbNotification } from "react-icons/tb";
import { NavLink, useHistory } from "react-router-dom";
import { Transitions } from "./../../components/Transition";
import { Directory, Encoding, Filesystem } from "@capacitor/filesystem";
import { GoHomeFill } from "react-icons/go";
// @ts-ignore
import LOGO from "./../../assets/background/icon.png";
import { deleteAccessToken } from "../../apis/auth";
import { useAuth } from "../../context/auth/auth.context";

interface LayoutProps {
  children: React.ReactNode;
}

const userProfile = {
  name: "Le Van Thinh",
  email: "thinhlevan201@gmail.com",
  mobileNumber: "0334598851",
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const history = useHistory();
  const auth = useAuth();
  const { showMessenger } = useChannelIOApi();

  const logout = async () => {
    await auth.logout();
    history.push("/home");
  };
  return (
    <Transitions>
      <div className="flex justify-between flex-col">
        {children}

        <div
          className="fixed w-[44px] h-w-[44px] bottom-[100px] right-[11%] z-20 rounded-full"
          onClick={showMessenger}
        >
          <img
            src={LOGO}
            alt=""
            className="w-full h-full block object-contain"
          />
        </div>

        <nav className="bg-[white] flex items-center justify-around py-4 fixed bottom-0 w-full z-50">
          <NavLink to={"/home"} activeClassName="active-nav">
            <div className="flex flex-col items-center gap-2">
              <GoHomeFill size={22} color="5c606f" />
              <p className="text-xs">Home</p>
            </div>
          </NavLink>

          <NavLink to={"/notification"} activeClassName="active-nav">
            <div className="flex flex-col items-center gap-2">
              <TbNotification size={22} color="5c606f" />
              <p className="text-xs">Thông báo</p>
            </div>
          </NavLink>

          <div onClick={logout}>
            <div className="flex flex-col items-center gap-2">
              <CgProfile size={22} color="5c606f" />
              <p className="text-xs">Profile</p>
            </div>
          </div>
        </nav>
      </div>
    </Transitions>
  );
};

export default Layout;
