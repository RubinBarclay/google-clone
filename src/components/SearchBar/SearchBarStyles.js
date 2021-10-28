import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.8rem 0 1.4rem;
  width: auto;
  max-width: 58rem;
  height: 4.4rem;
  background-color: #fff;
  border: 1px solid #dfe1e5;
  border-radius: 24px;
  flex-grow: 1;

  box-shadow: ${(p) =>
    p.variant === "results" ? "0 2px 5px 1px rgba(64, 60, 67, .16)" : "none"};

  &:hover {
    box-shadow: 0 2px 8px 1px rgba(64, 60, 67, 0.24);
  }
`;

export const SearchBarInput = styled.input`
  flex-grow: 1;
  padding-left: 1.3rem;
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.87);
  border: none;

  &:focus {
    outline: none;
  }
`;
