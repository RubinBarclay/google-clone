import React, { useState } from "react";
import { SearchBarInput, SearchBarWrapper } from "./SearchBarStyles";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";

function SearchBar({ variant, searchQuery, setSearchQuery }) {
  // const [text, setText] = useState("");

  const hideSearchIconHandler = () => {
    return variant === "home" || searchQuery !== "" ? "visible" : "hidden";
  };

  return (
    <SearchBarWrapper variant={variant}>
      <SearchIcon
        sx={{
          color: "#9aa0a6",
          fontSize: 20,
          visibility: hideSearchIconHandler(),
        }}
      />
      <SearchBarInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {/* <SearchBarInput value={text} onChange={(e) => setText(e.target.value)} /> */}
      {searchQuery && (
        <>
          <ClearIcon
            sx={{
              cursor: "pointer",
              color: "#70757a",
              fontSize: 24,
              margin: "0 8px",
            }}
            aria-label="Clear search box"
            onClick={() => setSearchQuery("")}
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
