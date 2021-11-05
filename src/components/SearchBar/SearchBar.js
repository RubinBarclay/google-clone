import React, { useState, useEffect } from "react";
import { SearchBarInput, SearchBarWrapper } from "./SearchBarStyles";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { useHistory, useParams } from "react-router";

function SearchBar({ variant }) {
  const { searchQuery } = useParams();
  const [text, setText] = useState("");
  let history = useHistory();

  // Set current search as value
  useEffect(() => {
    setText(searchQuery || "");
  }, [searchQuery]);

  // Hides search icon by default on results page
  const hideSearchIconHandler = () => {
    return variant === "home" || text !== "" ? "visible" : "hidden";
  };

  const onSubmitHandler = () => {
    history.push(`/results/${text}`);
  };

  return (
    <SearchBarWrapper
      id="searchBar"
      variant={variant}
      onSubmit={onSubmitHandler}
    >
      <SearchIcon
        sx={{
          color: "#9aa0a6",
          fontSize: 20,
          visibility: hideSearchIconHandler(),
        }}
      />
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
