import styled from "styled-components";

export const TopBarContainer = styled.div`
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
