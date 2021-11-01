import {
  TopBar,
  Wrapper,
  Logo,
  TopMenuWrapper,
  TopMenu,
  TopMenuOption,
  TopMenuToolsButton,
} from "./ResultStyles";
import logoSM from "../../assets/images/google-logo-sm.png";
import SearchBar from "../../components/SearchBar/SearchBar";
import TopBarIconWrapper from "../../components/TopBarIconWrapper/TopBarIconWrapper";
import SignInButton from "../../components/SignInButton/SignInButton";
import {
  Search,
  Settings,
  Apps,
  CropOriginal,
  RoomOutlined,
  OndemandVideo,
  ArticleOutlined,
  MoreVert,
} from "@mui/icons-material";

function Results() {
  return (
    <Wrapper>
      <TopBar>
        <Logo>
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
      </TopBar>
      <TopMenuWrapper>
        <TopMenu>
          <TopMenuOption active>
            <Search />
            All
          </TopMenuOption>
          <TopMenuOption>
            <CropOriginal />
            Images
          </TopMenuOption>
          <TopMenuOption>
            <RoomOutlined />
            Maps
          </TopMenuOption>
          <TopMenuOption>
            <OndemandVideo />
            Video
          </TopMenuOption>
          <TopMenuOption>
            <ArticleOutlined />
            News
          </TopMenuOption>
          <TopMenuOption>
            <MoreVert />
            More
          </TopMenuOption>
          <TopMenuToolsButton>Tools</TopMenuToolsButton>
        </TopMenu>
        <span>SafeSearch on</span>
      </TopMenuWrapper>
    </Wrapper>
  );
}

export default Results;
