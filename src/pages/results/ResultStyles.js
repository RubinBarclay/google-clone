import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: 1121px;
  width: 100%;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  height: 6.5rem;
  padding: 1.5rem 2.4rem 0;
  box-sizing: content-box;

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
