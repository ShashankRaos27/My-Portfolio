import React from "react";
import Header from "./components/header/Header";
import UserInfo from "./components/userInfo/UserInfo";

const Main = () => {
  return (
    <div className="dark:bg-gray-900">
      <Header />
      <UserInfo />
    </div>
  );
};

export default Main;
