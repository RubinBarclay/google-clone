import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Wrapper } from "./ResultStyles";
import TopBar from "./TopBar/TopBar";
import TopMenu from "./TopMenu/TopMenu";
import ResultsList from "./ResultsList/ResultsList";
import Footer from "../../components/Footer/Footer";

function Results() {
  const { searchQuery } = useParams();
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});
  const [topBarShadow, setTopBarShadow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setTopBarShadow(window.scrollY > 52);
    });
  }, []);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch(`/api/search/${searchQuery}`);
      const data = await response.json();

      setSearchInfo(data.searchInformation);
      setResults(data.items);
    };

    fetchResults();
  }, [searchQuery]);

  return (
    <Wrapper>
      <TopBar topBarShadow={topBarShadow} />
      <TopMenu />
      {results.length && ( // Only show footer and results once data is fetched
        <>
          <ResultsList searchInfo={searchInfo} results={results} />
          <div>
            <Footer variant="result" links={["Sweden"]} />
            <Footer
              variant="result"
              links={["Help", "Send feedback", "Privacy", "Terms"]}
            />
          </div>
        </>
      )}
    </Wrapper>
  );
}

export default Results;
