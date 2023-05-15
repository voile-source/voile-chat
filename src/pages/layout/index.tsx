import React, { useState, useEffect } from "react";
import Main from "./components/main";
import { connect } from "react-redux";
import { createSocket, send } from "@/utils/socket";

function Layout(props: any) {
  const { user } = props;
  useEffect(() => {
    createSocket();
    send("login", {
      account: user.phone,
    });
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1">
        <Main></Main>
      </div>
    </div>
  );
}
export default connect(({ user }) => {
  return {
    user: user.userInfo,
  };
})(Layout);
