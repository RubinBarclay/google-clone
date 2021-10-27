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
  HomeFooterLink,
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
            <HomeFooterLink>Sweden</HomeFooterLink>
          </div>
        </HomeFooter>
        <HomeFooter>
          <div>
            <HomeFooterLink>About</HomeFooterLink>
            <HomeFooterLink>Advertising</HomeFooterLink>
            <HomeFooterLink>Business</HomeFooterLink>
            <HomeFooterLink>How Search works</HomeFooterLink>
            <div />
            <HomeFooterLink>Privacy</HomeFooterLink>
            <HomeFooterLink>Terms</HomeFooterLink>
            <HomeFooterLink>Settings</HomeFooterLink>
          </div>
        </HomeFooter>
      </div>
    </HomeWrapper>
  );
}

export default Home;
