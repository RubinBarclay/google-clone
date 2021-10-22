import styled from "styled-components";

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
