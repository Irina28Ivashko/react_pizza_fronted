import React from "react";

const MainLayot = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">{children}</div>
    </div>
  );
};

export default MainLayot;
