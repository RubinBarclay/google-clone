import styled from "styled-components";

const TopBarIconWrapper = styled.div`
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

export default TopBarIconWrapper;
