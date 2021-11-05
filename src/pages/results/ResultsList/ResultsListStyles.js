import styled from "styled-components";

export const ResultsListContainer = styled.div`
  width: 65.2rem;
  margin-left: 17rem;
`;

export const SearchInformation = styled.div`
  font-family: "Product Sans Regular", arial, sans-serif;
  font-size: 1.4rem;
  line-height: 43px;
  color: #70757a;
`;

export const SearchResult = styled.div`
  width: 600px;
  margin-top: 0;
  margin-bottom: 30px;
  padding-top: 1px;
`;

export const ResultUrl = styled.cite`
  font-size: 14px;
  font-style: normal;
  line-height: 1.3;
  color: #202124;
  padding-top: 1px;
  padding-bottom: 2px;
  cursor: pointer;

  & span,
  h3 {
    display: inline-block;
    text-decoration: none;
    width: 100%;
  }

  & span {
    color: #202124;
    margin-left: 0.5rem;
  }

  & svg {
    vertical-align: bottom;
    margin-left: 1.2rem;
  }

  & h3 {
    color: #1a0dab;
    font-size: 2rem;
    font-weight: normal;
    padding-top: 5px;
    margin-bottom: 2px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ResultBody = styled.div`
  font-size: 1.4rem;
  line-height: 1.58;
  color: #4d5156;

  & span {
    color: #70757a;
  }
`;
