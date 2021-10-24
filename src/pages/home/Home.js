import React from "react";
import {
  HomeWrapper,
  HomeTopBar,
  AppsIconWrapper,
  LogoWrapper,
  SearchWrapper,
  SearchButtons,
  SearchButton,
  HomeFooter,
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
        <SearchButtons>
          <SearchButton>Google Search</SearchButton>
          <SearchButton>I'm Feeling Lucky</SearchButton>
        </SearchButtons>
      </SearchWrapper>
      <div>
        <HomeFooter>
          <div>
            <span>Sweden</span>
          </div>
        </HomeFooter>
        <HomeFooter>
          <div>
            <span>About</span>
            <span>Advertising</span>
            <span>Business</span>
            <span>How Search works</span>
            <div />
            <span>Privacy</span>
            <span>Terms</span>
            <span>Settings</span>
          </div>
        </HomeFooter>
      </div>
    </HomeWrapper>
  );
}

export default Home;
