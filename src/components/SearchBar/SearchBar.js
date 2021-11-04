import React, { useState, useContext, useEffect } from "react";
import { SearchBarInput, SearchBarWrapper } from "./SearchBarStyles";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { useHistory } from "react-router";
import SearchContext from "../../context/searchContext";

function SearchBar({ variant }) {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const [text, setText] = useState("");
  let history = useHistory();

  // Set current search as value
  useEffect(() => {
    setText(searchQuery);
  }, [searchQuery]);

  const hideSearchIconHandler = () => {
    return variant === "home" || text !== "" ? "visible" : "hidden";
  };

  const onSubmitHandler = () => {
    setSearchQuery(text);
    history.push("/results");
  };

  return (
    <SearchBarWrapper variant={variant} onSubmit={onSubmitHandler}>
      <SearchIcon
        sx={{
          color: "#9aa0a6",
          fontSize: 20,
          visibility: hideSearchIconHandler(),
        }}
      />
      {/* <SearchBarInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      /> */}
      <SearchBarInput value={text} onChange={(e) => setText(e.target.value)} />
      {text && (
        <>
          <ClearIcon
            sx={{
              cursor: "pointer",
              color: "#70757a",
              fontSize: 24,
              margin: "0 8px",
            }}
            aria-label="Clear search box"
            onClick={() => setText("")}
          />
          <div
            style={{
              height: "70%",
              margin: "8px 0",
              borderRight: "1px solid #e8eaed",
            }}
          />
        </>
      )}
      {/* TODO: Add google voice API */}
      <KeyboardVoiceIcon
        sx={{
          cursor: "pointer",
          color: "#70757a",
          fontSize: 24,
          margin: "0 12px",
        }}
      />
      {variant === "results" && (
        <SearchIcon
          sx={{
            color: "#4285f4",
            fontSize: 24,
            marginRight: "13px",
          }}
        />
      )}
    </SearchBarWrapper>
  );
}

export default SearchBar;
