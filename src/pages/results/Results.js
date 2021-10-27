import { TopBar, Wrapper, Logo } from "./ResultStyles";
import logoSM from "../../assets/google-logo-sm.png";
import SearchBar from "../../components/SearchBar/SearchBar";

function Results() {
  return (
    <Wrapper>
      <TopBar>
        <Logo src={logoSM} />
        <SearchBar variant="results" />
      </TopBar>
    </Wrapper>
  );
}

export default Results;
