import React, { useState } from "react";
import { SearchBarInput, SearchBarWrapper } from "./SearchBarStyles";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

function SearchBar() {
  const [text, setText] = useState("");
  return (
    <SearchBarWrapper>
      <SearchIcon sx={{ color: "#9aa0a6", fontSize: 20 }} />
      <SearchBarInput value={text} onChange={(e) => setText(e.target.value)} />
      {text && (
        <ClearIcon
          sx={{
            cursor: "pointer",
            color: "#70757a",
            fontSize: 24,
            margin: "0 8px",
          }}
          onClick={() => setText("")}
        />
      )}
    </SearchBarWrapper>
  );
}

export default SearchBar;
