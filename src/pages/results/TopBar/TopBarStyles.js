import styled from "styled-components";

export const TopBarContainer = styled.div`
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

export const Logo = styled.a`
  box-sizing: content-box;
  width: 9.2rem;
  padding: 0.8rem 4rem 0 0;
`;
