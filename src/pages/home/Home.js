import React from "react";
import {
  HomeWrapper,
  HomeTopBar,
  AppsIconWrapper,
  LogoContainer,
} from "./HomeStyles";
import AppsIcon from "@mui/icons-material/Apps";
import SignInButton from "../../components/SignInButton/SignInButton";
import logo from "../../assets/google-logo.png";

function Home() {
  return (
    <HomeWrapper>
      <HomeTopBar>
        <span>Gmail</span>
        <span>Images</span>
        <AppsIconWrapper>
          <AppsIcon sx={{ fontSize: 24 }} />
        </AppsIconWrapper>
        <SignInButton>Sign In</SignInButton>
      </HomeTopBar>
      <LogoContainer>
        <img src={logo} alt="Google logo" />
      </LogoContainer>
    </HomeWrapper>
  );
}

export default Home;
