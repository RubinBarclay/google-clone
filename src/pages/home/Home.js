import React from "react";
import {
  HomeWrapper,
  HomeTopBar,
  AppsIconWrapper,
  LogoWrapper,
  SearchWrapper,
} from "./HomeStyles";
import AppsIcon from "@mui/icons-material/Apps";
import SignInButton from "../../components/SignInButton/SignInButton";
import logo from "../../assets/google-logo.png";
import SearchBar from "../../components/SearchBar/SearchBar";

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
      <LogoWrapper>
        <img src={logo} alt="Google logo" />
      </LogoWrapper>
      <SearchWrapper>
        <SearchBar />
      </SearchWrapper>
    </HomeWrapper>
  );
}

export default Home;
