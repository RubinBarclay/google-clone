import { SearchWrapper, SearchButtons, SearchButton } from "./SearchStyles";
import SearchBar from "../../../components/SearchBar/SearchBar";

function Search() {
  return (
    <SearchWrapper>
      <SearchBar variant="home" />
      <SearchButtons>
        <SearchButton form="searchBar">Google Search</SearchButton>
        <SearchButton form="searchBar">I'm Feeling Lucky</SearchButton>
      </SearchButtons>
    </SearchWrapper>
  );
}

export default Search;
