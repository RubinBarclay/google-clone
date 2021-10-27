import React from "react";
import {
  Wrapper,
  TopBar,
  AppsIconWrapper,
  LogoWrapper,
  SearchWrapper,
  SearchButtons,
  SearchButton,
  Footer,
  FooterLink,
} from "./HomeStyles";
import AppsIcon from "@mui/icons-material/Apps";
import SignInButton from "../../components/SignInButton/SignInButton";
import logo from "../../assets/google-logo.png";
import SearchBar from "../../components/SearchBar/SearchBar";

function Home() {
  return (
    <Wrapper>
      <TopBar>
        <span>Gmail</span>
        <span>Images</span>
        <AppsIconWrapper>
          <AppsIcon sx={{ fontSize: 24 }} />
        </AppsIconWrapper>
        <SignInButton>Sign In</SignInButton>
      </TopBar>
      <LogoWrapper>
        <img src={logo} alt="Google logo" />
      </LogoWrapper>
      <SearchWrapper>
        <SearchBar variant="home" />
        <SearchButtons>
          <SearchButton>Google Search</SearchButton>
          <SearchButton>I'm Feeling Lucky</SearchButton>
        </SearchButtons>
      </SearchWrapper>
      <div>
        <Footer>
          <div>
            <FooterLink>Sweden</FooterLink>
          </div>
        </Footer>
        <Footer>
          <div>
            <FooterLink>About</FooterLink>
            <FooterLink>Advertising</FooterLink>
            <FooterLink>Business</FooterLink>
            <FooterLink>How Search works</FooterLink>
            <div />
            <FooterLink>Privacy</FooterLink>
            <FooterLink>Terms</FooterLink>
            <FooterLink>Settings</FooterLink>
          </div>
        </Footer>
      </div>
    </Wrapper>
  );
}

export default Home;
