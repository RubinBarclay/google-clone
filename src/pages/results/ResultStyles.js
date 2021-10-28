import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: 1121px;
  width: 100%;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  height: 6.5rem;
  padding-top: 2rem;
  margin: 0.6rem 2.2rem 0.4rem 2.4rem;

  & > div:nth-child(3) {
    margin-left: auto;
  }
`;

export const Logo = styled.img`
  box-sizing: content-box;
  padding: 0.4rem 6.1rem 0 0;
  height: 3rem;
`;

export const TopMenu = styled.div`
  color: #70757a;
  font-size: 1.4rem;
  font-family: "Product Sans Regular", arial, sans-serif;
  border-bottom: 1px solid #ebebeb;
`;
