import Checkbox from "@mui/material/Checkbox";
import type { FC } from "react";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { CountriesType, getListCountries } from "../../apis/countries";
import { TimeslotsType, getListTimeslots } from "../../apis/timeslots";
import { Transitions } from "./../../components/Transition";
import "./FreeTrial.css";
interface FreeTrialProps {}

type FreeTrialInput = {
  email: string;
  password: string;
};
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const FreeTrial: FC<FreeTrialProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FreeTrialInput>();
  const [tabs, setTabs] = useState<number>(0);
  const [countries, setCountries] = useState<CountriesType[]>([]);
  const [timeSlots, setTimeSlots] = useState<TimeslotsType[]>([]);

  const onSubmit: SubmitHandler<FreeTrialInput> = (dataset) => {};

  useEffect(() => {
    const fetch = async () => {
      const [resCountries, resTimeslots] = await Promise.all([
        getListCountries(),
        getListTimeslots(),
      ]);
      setCountries(resCountries.data);
      setTimeSlots(resTimeslots.data);
    };

    fetch();
  }, []);
  return (
    <>
      <div className="background-home">
        <div className="free-trial-container">
          <div>
            <h1 className="home-title">
              {tabs === 0 && "Thông tin học sinh"}
              {tabs === 1 && "Thông tin lớp học"}
            </h1>
          </div>
          {tabs === 0 && (
            <Transitions>
              <div className="free-trial-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-item">
                    <label htmlFor="">Tên học sinh</label>
                    <input
                      type="text"
                      className={errors.email ? "error-input" : ""}
                      placeholder="Nhập tên học sinh"
                    />
                  </div>

                  <div className="form-item">
                    <label htmlFor="">Tên tiếng anh</label>
                    <input
                      className={errors.password ? "error-input" : ""}
                      type="password"
                      placeholder="Nhập tên tiếng anh của học sinh"
                    />
                    <div className="form-item-message">
                      <span className="error text-xs">
                        * Vui lòng nhập tên tiếng Anh bạn sẽ sử dụng khi nói
                        chuyện với giáo viên nước ngoài.
                      </span>
                    </div>
                  </div>

                  <div className="form-item">
                    <label htmlFor="">Tuổi</label>
                    <input
                      className={errors.password ? "error-input" : ""}
                      type="password"
                      placeholder="Nhập tuổi của học sinh"
                    />
                    <div className="form-item-message">
                      <span className="error text-xs">
                        * Vui lòng nhập tên tiếng Anh bạn sẽ sử dụng khi nói
                        chuyện với giáo viên nước ngoài.
                      </span>
                    </div>
                  </div>

                  <div className="form-item">
                    <label htmlFor="">Quốc gia</label>
                    <select className="form-item-countries">
                      {countries.map((dataset) => (
                        <option value={dataset.countryName} key={dataset._id}>
                          {dataset.countryName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button onClick={() => setTabs((pre) => pre + 1)}>
                    Tiếp tục
                  </button>
                </form>
              </div>
            </Transitions>
          )}
          {tabs === 1 && (
            <Transitions>
              <div className="free-trial-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-item">
                    <label htmlFor="">Khóa học</label>
                    <div className="free-trial-form-item-radio">
                      <div className="free-trial-form-item-radio-container">
                        <input
                          type="radio"
                          id="Raz-kids"
                          name="radio-group"
                          checked
                        />
                        <label htmlFor="Raz-kids">Raz-kids</label>
                      </div>

                      <div className="free-trial-form-item-radio-container">
                        <input type="radio" id="Epic" name="radio-group" />
                        <label htmlFor="Epic">Epic</label>
                      </div>
                    </div>
                    <span className="error text-xs">
                      * Nếu bạn muốn biết thêm về sự khác biệt giữa hai chương
                      trình học, vui lòng nhấp vào
                    </span>
                  </div>

                  <div className="form-item">
                    <label>Ngày bắt đầu mong muốn</label>
                    <input
                      className="free-trial-form-date"
                      id="free-trial-form-date"
                      type="date"
                      defaultValue={new Date().toISOString().split("T")[0]}
                      placeholder="Nhập ngày bắt đầu"
                    />
                  </div>

                  <div className="form-item">
                    <label>Chọn buổi mong muốn</label>
                    <div className="free-trial-form-weekday  grid grid-cols-2 gap-x-20">
                      {[2, 3, 4, 5, 6, 7, "Chủ nhật"].map((dataset, index) => (
                        <div
                          className="flex gap-1 items-center justify-center"
                          key={index}
                        >
                          <label
                            className="container"
                            htmlFor={`lesson${index}`}
                            key={dataset}
                          >
                            {index === 6 ? dataset : `Thứ ${dataset}`}
                          </label>
                          <Checkbox
                            {...label}
                            id={`lesson${index}`}
                            sx={{
                              color: "white",
                              "&.Mui-checked": {
                                color: "#f87da9",
                              },
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <span className="error text-xs">
                      * Vui lòng chọn tổng cộng 3 ngày.
                    </span>
                  </div>

                  <div className="form-item">
                    <label htmlFor="">Thời gian mong muốn</label>
                    <select className="form-item-countries">
                      {timeSlots.map((dataset) => (
                        <option value={dataset._id} key={dataset._id}>
                          {`${dataset.startHour}:${dataset.startMinute} - ${dataset.endHour}:${dataset.endMinute}`}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button onClick={() => setTabs((pre) => pre - 1)}>
                    Quay lại
                  </button>
                  <button type="submit">
                    <Link to={"/home"}>Đăng ký</Link>
                  </button>
                </form>
              </div>
            </Transitions>
          )}
        </div>
      </div>
    </>
  );
};

export default FreeTrial;
