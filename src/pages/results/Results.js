import {
  TopBar,
  Wrapper,
  Logo,
  TopMenuWrapper,
  TopMenu,
  TopMenuOption,
  TopMenuToolsButton,
  ResultsList,
  SearchInformation,
  SearchResult,
  ResultUrl,
  ResultBody,
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
      <ResultsList>
        <SearchInformation>About XXXX searches in XXX time</SearchInformation>
        <SearchResult>
          <ResultUrl>
            <a href="/">
              https://fakesite.com
              <span>
                &gt; Home &gt; Place <MoreVert sx={{ fontSize: 18 }} />
              </span>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum!
              </h3>
            </a>
          </ResultUrl>
          <ResultBody>
            <span>22 Jun 2014 — </span> Ice cream tastes proper due to the fact
            it includes a correct amount of fats and flavorings. Fat on its
            personal tastes fantastically bland and rotten, but fat ... 12
            answers · 4 votes: Real ice cream has a lot of fat. Being the cream
            and the egg yolks. Fat is a...
          </ResultBody>
        </SearchResult>
      </ResultsList>
    </Wrapper>
  );
}

export default Results;
