import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #f2f2f2;
  border-bottom: 1px solid #dadce0;
  font-size: 1.5rem;
  color: #70757a;

  & > div {
    display: flex;
    justify-content: spaced-between;
  }

  ${(p) => {
    if (p.variant === "home") {
      return `
        padding: 0 1.5rem;

        &:nth-child(2) {
          font-size: 1.4rem;
          padding: 0 2rem;
          border: none;
        }


        & > div > div {
          flex-grow: 1;
        }
      `;
    } else {
      return `
        padding: 0 15.5rem;

        &:nth-child(2) {
          font-size: 1.4rem;
          border: none;
        }
      `;
    }
  }}
`;

export const FooterLink = styled.span`
  cursor: pointer;
  padding: 1.5rem;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`;
