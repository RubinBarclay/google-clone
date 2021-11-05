import React from "react";
import { Wrapper, LogoWrapper } from "./HomeStyles";
import TopBar from "./TopBar/TopBar";
import Search from "./Search/Search";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/images/google-logo.png";

function Home() {
  return (
    <Wrapper>
      <TopBar />
      <LogoWrapper>
        <img src={logo} alt="Google logo" />
      </LogoWrapper>
      <Search />
      <div>
        <Footer variant="home" links={["Sweden"]} />
        <Footer
          variant="home"
          links={[
            "About",
            "Advertising",
            "Business",
            "How Search Works",
            "Privacy",
            "Terms",
            "Settings",
          ]}
        />
      </div>
    </Wrapper>
  );
}

export default Home;
