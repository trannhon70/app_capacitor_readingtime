import type { FC } from "react";
import React from "react";

interface LoadingProps {}

const Loading: FC<LoadingProps> = () => {
  return (
    <>
      <div className="fixed w-screen h-screen bg-white z-[99]">
        <div className="loader absolute"></div>
      </div>
    </>
  );
};

export default Loading;
