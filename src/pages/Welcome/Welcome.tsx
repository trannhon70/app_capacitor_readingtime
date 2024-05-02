import type { FC } from "react";
import React, { useEffect, useState } from "react";

import Banner from "../../components/Banner";
import BannerFeedBack from "../../components/BannerFeedback";
import BannerProducts from "../../components/BannerProducts";
import SectionWhy from "../../components/SectionWhy";
import "./Welcome.css";
import { getAccessToken } from "../../apis/auth";
import { useAuth } from "../../context/auth/auth.context";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = () => {
  const auth = useAuth();
  const location = useLocation();
  useEffect(() => {
    const isAuth = async () => {
      const assess_token = await getAccessToken();
      if (assess_token !== null) auth.login(String(assess_token));
      else auth.logout();
    };
    isAuth();
  }, []);
  return (
    <>
      <div className="px-[10%] py-12 text-center welcome-container bg-[white] ">
        <h5>{auth.isAuthenticated ? "Have token" : "No token"}</h5>
        <Banner />
        <BannerFeedBack />
        <BannerProducts />
        <SectionWhy />
      </div>
    </>
  );
};

export default Welcome;
