import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-height: 160px;
  padding: 2rem;
  margin-bottom: auto;
`;

export const SearchButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7rem;
  padding-top: 1.8rem;
  flex-basis: 100%;
`;

export const SearchButton = styled.button`
  background-color: #f8f9fa;
  border: 1px solid #f8f9fa;
  border-radius: 4px;
  color: #3c4043;
  font-family: arial, sans-serif;
  font-size: 14px;
  margin: 11px 4px;
  padding: 0 16px;
  line-height: 27px;
  height: 36px;
  min-width: 54px;
  text-align: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    border: 1px solid #dadce0;
    color: #202124;
  }
`;
