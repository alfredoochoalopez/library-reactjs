import React from "react";
import { Logo } from "./header.styles";
import { Header, AppName } from "./header.styles";

const HeaderView = () => (
  <Header>
      <Logo src="/images/logo.png" alt="Logo" />
      <AppName>Library CC</AppName>
  </Header>
);
export default HeaderView;
