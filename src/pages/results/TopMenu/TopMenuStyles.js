import styled from "styled-components";

export const MenuWrapper = styled.div`
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

export const Menu = styled.div`
  display: flex;
  align-items: center;
  width: 69.2rem;
  margin-left: 17rem;
  margin-top: 0.4rem;
`;

export const MenuOption = styled.div`
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

export const MenuToolsButton = styled.button`
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
