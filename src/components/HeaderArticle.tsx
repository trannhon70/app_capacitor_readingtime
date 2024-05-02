import type { FC } from "react";
import React from "react";

interface HeaderArticleProps {
  children: React.ReactNode;
}

const HeaderArticle: FC<HeaderArticleProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default HeaderArticle;
