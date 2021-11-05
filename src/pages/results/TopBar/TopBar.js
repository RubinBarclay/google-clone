import { TopBarContainer, Logo } from "./TopBarStyles";
import { Settings, Apps } from "@mui/icons-material";
import logoSM from "../../../assets/images/google-logo-sm.png";
import SearchBar from "../../../components/SearchBar/SearchBar";
import TopBarIconWrapper from "../../../components/TopBarIconWrapper/TopBarIconWrapper";
import SignInButton from "../../../components/SignInButton/SignInButton";

function TopBar({ topBarShadow }) {
  return (
    <TopBarContainer bottomShadow={topBarShadow}>
      <Logo href="/">
        <img src={logoSM} alt="Google logo" style={{ width: "9.2rem" }} />
      </Logo>
      <SearchBar variant="results" />
      <TopBarIconWrapper>
        <Settings sx={{ fontSize: 24 }} />
      </TopBarIconWrapper>
      <TopBarIconWrapper>
        <Apps sx={{ fontSize: 24 }} />
      </TopBarIconWrapper>
      <SignInButton>Sign in</SignInButton>
    </TopBarContainer>
  );
}

export default TopBar;
