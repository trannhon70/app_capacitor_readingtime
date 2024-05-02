import type { FC } from "react";
import React, { useEffect, useState } from "react";
import "./Home.css";
// @ts-ignore
import Banner from "../../assets/banner/header-logo-removebg-preview.png";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <div className="background-home">
        <div className="home-container justify-around h-[75%]">
          <img src={Banner} className="object-contain" alt="" />
          <div className="flex flex-col gap-7">
            <h1 className="home-title">Reading Time</h1>
            <p className="home-desc">
              Nuôi dưỡng thói quen đọc sách cho con em chúng ta. Tạo ra trải
              nghiệm làm quen với tiếng Anh vui vẻ cho bé.
            </p>
            <Link to={"/register-free-trial"} className="button-free-trial">
              Đăng ký học thử Miễn Phí
            </Link>
            <p>
              Bạn đã có tài khoản?{" "}
              <span className="text-[#e7665e]">
                <Link to={"/login"}>Đăng nhập</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
