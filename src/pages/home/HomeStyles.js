import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const HomeTopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 6rem;
  padding: 0.6rem;

  & > span {
    font-size: 1.3rem;
    line-height: 2.4rem;
    color: rgba(0, 0, 0, 0.87);
    padding-right: 1.5rem;
    cursor: pointer;
  }

  & > span:hover {
    text-decoration: underline;
  }
`;

export const AppsIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  color: #5f6368;
  cursor: pointer;
  margin-right: 4px;

  &:hover {
    background-color: rgba(60, 64, 67, 0.08);
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  height: calc(100% - 56rem);
  max-height: 290px;
  min-height: 92px;
`;

export const SearchWrapper = styled.div`
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

export const HomeFooter = styled.div`
  padding: 0 1.5rem;
  background-color: #f2f2f2;
  border-bottom: 1px solid #dadce0;
  font-size: 1.5rem;
  color: #70757a;

  &:nth-child(2) {
    font-size: 1.4rem;
    padding: 0 2rem;
    border: none;
  }

  & > div {
    display: flex;
    justify-content: spaced-between;
  }

  & > div > div {
    flex-grow: 1;
  }
`;

export const HomeFooterLink = styled.span`
  padding: 1.5rem;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`;
