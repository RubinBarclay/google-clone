import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: 1121px;
  width: 100%;
`;

export const TopBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  height: 6.5rem;
  padding: 1.5rem 2.4rem 0;
  box-sizing: content-box;
  background-color: #fff;
  transition: box-shadow ease 100ms;
  ${(p) => p.bottomShadow && "box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);"}

  & > div:nth-child(3) {
    margin-left: auto;
  }
`;

export const Logo = styled.div`
  box-sizing: content-box;
  width: 9.2rem;
  padding: 0.8rem 4rem 0 0;
`;

export const TopMenuWrapper = styled.div`
  display: flex;
  color: #70757a;
  font-size: 1.4rem;
  font-family: "Product Sans Regular", arial, sans-serif;
  border-bottom: 1px solid #ebebeb;

  & > span:last-child {
    margin: auto;
    margin-right: 0;
    padding: 0.6rem 3.3rem 0 0;
  }
`;

export const TopMenu = styled.div`
  display: flex;
  align-items: center;
  width: 69.2rem;
  margin-left: 17rem;
  margin-top: 0.4rem;
`;

export const TopMenuOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.7rem 0.9rem 0 0.7rem;
  padding: 0 2px 1.1rem 0;
  color: ${(p) => (p.active ? "#1a73e8" : "#5f6368")};
  border-bottom: ${(p) =>
    p.active ? "3px solid #1a73e8" : "3px solid transparent"};

  & > svg {
    font-size: 1.7rem;
    margin-right: 0.4rem;
  }
`;

export const TopMenuToolsButton = styled.button`
  font-family: "Product Sans Regular", arial, sans-serif;
  color: #5f6368;
  margin-left: auto;
  border: none;
  border-radius: 2px;
  line-height: 19px;
  cursor: pointer;
  padding: 4px 11px;
  background-color: #fff;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid #dadce0;
    background-color: #f8f9fa;
    color: #202124;
  }
`;

export const ResultsList = styled.div`
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

  & span {
    color: #202124;
    margin-left: 0.5rem;
    display: inline-block;
    text-decoration: none !important;
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
    margin-bottom: 3px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
