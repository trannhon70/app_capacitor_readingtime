import type { FC } from "react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./Login.css";
// @ts-ignore
import LoginBanner from "./../../assets/banner/login-banner.png";
import {
  Directory,
  Encoding,
  Filesystem,
  FilesystemDirectory,
  FilesystemEncoding,
} from "@capacitor/filesystem";
import Backdrop from "@mui/material/Backdrop";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { login, saveAccessToken } from "../../apis/auth";
import { Transitions } from "../../components/Transition";
// @ts-ignore
import ErrorLogo from "./../../assets/error-10376.svg";
import { useAuth } from "../../context/auth/auth.context";

interface LoginProps {}

export type LoginInput = {
  email: string;
  password: string;
};

const Login: FC<LoginProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>();
  const [error, setError] = useState<string | null>(null);
  const history = useHistory();
  const auth = useAuth();

  const onSubmit: SubmitHandler<LoginInput> = async (dataset) => {
    const response = await login(dataset);
    console.log(response, 'response');
    
    if (!response.error) {
      await auth.login(response.data.token);
      history.push("/home");
    }

    switch (response.message) {
      case "This account doest not exist":
        setError(
          " Tài khoản không tồn taị. Vui lòng kiểm tra lại Email hoặc Mật khẩu"
        );
        break;
      case "Email or password is incorrect":
          setError(
            " Tài khoản không tồn taị. Vui lòng kiểm tra lại Email hoặc Mật khẩu"
          );
          break;
      default:
        break;
    }
  };

  return (
    <>
      <Transitions>
        <div className="background-home">
          <div className="login-container">
            <img src={LoginBanner} alt="" className="object-contain" />
            <div className="login-form">
              <h3 className="login-title">Welcome back</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-item">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    className={errors.email ? "error-input" : ""}
                    placeholder="Nhập email của bạn"
                    defaultValue={"huywocker92016@gmail.com"}
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="error">* Email không được bỏ trống</span>
                  )}
                </div>

                <div className="form-item">
                  <label htmlFor="">Mật khẩu</label>
                  <input
                    className={errors.password ? "error-input" : ""}
                    type="password"
                    placeholder="Nhập mật khẩu của bạn"
                    {...register("password", { required: true })}
                    defaultValue={"123456@Abc"}
                  />
                  <div className="form-item-message">
                    {errors.password ? (
                      <span className="error">
                        * Mật khẩu không được bỏ trống
                      </span>
                    ) : (
                      <span></span>
                    )}
                    <span className="sub-button">Quên mật khẩu?</span>
                  </div>
                </div>
                <button type="submit">Đăng nhập</button>
              </form>
            </div>
          </div>
        </div>
      </Transitions>

      <Backdrop
        sx={{ color: "black", background: "white" }}
        open={error ? true : false}
      >
        <div className="text-center justify-center px-[10%] h-full flex flex-col">
          <div>
            <img
              className="w-[150px] h-[150px] mx-auto"
              src={ErrorLogo}
              alt=""
            />
            <h4 className="my-6 text-3xl font-bold">Có lỗi xảy ra!</h4>
            <p className="leading-6">
              Tài khoản không tồn taị. Vui lòng kiểm tra lại Email hoặc Mật khẩu
            </p>
          </div>

          <button
            className="px-[63px] bg-[#e7665e] rounded-[9px] mt-8 mb-8 p-4 text-white"
            onClick={() => setError(null)}
          >
            Thử lại
          </button>
        </div>
      </Backdrop>
    </>
  );
};

export default Login;
