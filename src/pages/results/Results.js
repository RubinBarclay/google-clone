import { TopBar, Wrapper, Logo } from "./ResultStyles";
import logoSM from "../../assets/google-logo-sm.png";
import SearchBar from "../../components/SearchBar/SearchBar";
import TopBarIconWrapper from "../../components/TopBarIconWrapper/TopBarIconWrapper";
import Settings from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import SignInButton from "../../components/SignInButton/SignInButton";

function Results() {
  return (
    <Wrapper>
      <TopBar>
        <Logo src={logoSM} />
        <SearchBar variant="results" />
        <TopBarIconWrapper>
          <Settings sx={{ fontSize: 24 }} />
        </TopBarIconWrapper>
        <TopBarIconWrapper>
          <AppsIcon sx={{ fontSize: 24 }} />
        </TopBarIconWrapper>
        <SignInButton>Sign in</SignInButton>
      </TopBar>
    </Wrapper>
  );
}

export default Results;
