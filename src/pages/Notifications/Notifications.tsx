import moment from "moment";
import type { FC } from "react";
import React, { useEffect, useState } from "react";
import "./Notifications.css";
interface NotificationsProps {}

const NotificationsItems = [
  {
    message:
      "Notification Design designed by Designspace. Connect with them on Dribbble",
    createdAt: new Date(),
  },
  {
    message:
      "Notification Design designed by Designspace. Connect with them on Dribbble",
    createdAt: new Date(),
  },
  {
    message:
      "Notification Design designed by Designspace. Connect with them on Dribbble",
    createdAt: new Date(),
  },
];

const NotificationsSkelton = () => {
  return (
    <div className="post my-5">
      <div className="avatar rounded-full"></div>
      <div className="flex flex-col">
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};
const Notifications: FC<NotificationsProps> = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <>
      <div className="px-[10%] py-12">
        <h3 className="text-[#5353AC] font-bold text-2xl mb-2">Notification</h3>

        <div className="mt-[40px]">
          <h6 className="font-bold">Yesterday</h6>
          {isLoading ? (
            <>
              <div>{NotificationsSkelton()}</div>
              <div>{NotificationsSkelton()}</div>
              <div>{NotificationsSkelton()}</div>
            </>
          ) : (
            <div className="">
              {NotificationsItems.map((dataset) => (
                <div key={dataset.message} className="fading-component-noti">
                  <div className="flex gap-6 my-5">
                    <img
                      className="w-[52px] h-[52px] rounded-full"
                      src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/434130139_923824076411672_505531600236600265_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mVIB9wPiJ44Q7kNvgGEiIpU&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCe9CXxPc-t7igUHOSUF5l840_q4mZXrsA-FDTy5ZJJew&oe=66364C82"
                      alt="Rounded avatar"
                    ></img>
                    <div>
                      <p className="text-sm">{dataset.message}</p>
                      <span className="text-[#e7665e] text-sm font-semibold">
                        {moment(dataset.createdAt).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Notifications;
