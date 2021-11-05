import React from "react";
import { TopBarContainer } from "./TopBarStyles";
import TopBarIconWrapper from "../../../components/TopBarIconWrapper/TopBarIconWrapper";
import SignInButton from "../../../components/SignInButton/SignInButton";
import AppsIcon from "@mui/icons-material/Apps";

function Topbar() {
  return (
    <TopBarContainer>
      <span>Gmail</span>
      <span>Images</span>
      <TopBarIconWrapper>
        <AppsIcon sx={{ fontSize: 24 }} />
      </TopBarIconWrapper>
      <SignInButton>Sign In</SignInButton>
    </TopBarContainer>
  );
}

export default Topbar;
