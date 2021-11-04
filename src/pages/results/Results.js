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
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Results() {
  const { searchQuery } = useParams();
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch(`/api/search/${searchQuery}`);
      const data = await response.json();

      console.log(data);
      setSearchInfo(data.searchInformation);
      setResults(data.items);
    };

    fetchResults();
  }, [searchQuery]);

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
        <SearchInformation>
          About {searchInfo.formattedTotalResults} results in (
          {searchInfo.formattedSearchTime} seconds)
        </SearchInformation>
        {results.map((result) => (
          <SearchResult key={result?.cacheId + Math.random()}>
            <ResultUrl>
              <a href={result.link}>
                <span>
                  {result.formattedUrl}
                  <MoreVert sx={{ fontSize: 18 }} />
                </span>
                <h3>{result.title}</h3>
              </a>
            </ResultUrl>
            <ResultBody
              dangerouslySetInnerHTML={{ __html: result.htmlSnippet }}
            />
          </SearchResult>
        ))}
      </ResultsList>
    </Wrapper>
  );
}

export default Results;
