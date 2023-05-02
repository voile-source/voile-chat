import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import Side from "./components/side";

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <div className="flex-1">
        <Main></Main>
      </div>

      <Footer></Footer>
    </div>
  );
}
