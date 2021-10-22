import React from "react";
import { HomeTopBar, AppsIconWrapper } from "./HomeStyles";
import AppsIcon from "@mui/icons-material/Apps";
import SignInButton from "../../components/SignInButton/SignInButton";

function Home() {
  return (
    <HomeTopBar>
      <span>Gmail</span>
      <span>Images</span>
      <AppsIconWrapper>
        <AppsIcon sx={{ fontSize: 24 }} />
      </AppsIconWrapper>
      <SignInButton>Sign In</SignInButton>
    </HomeTopBar>
  );
}

export default Home;
