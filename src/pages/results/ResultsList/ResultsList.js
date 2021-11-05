import {
  ResultsListContainer,
  SearchInformation,
  SearchResult,
  ResultUrl,
  ResultBody,
} from "./ResultsListStyles";
import { MoreVert } from "@mui/icons-material";

function ResultsList({ searchInfo, results }) {
  return (
    <ResultsListContainer>
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
    </ResultsListContainer>
  );
}

export default ResultsList;
