import styled from "styled-components";

const SignInButton = styled.button`
  font-family: "Product Sans Regular", arial, sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  color: white;
  background-color: rgb(26, 115, 232);
  padding: 0.9rem 2.3rem;
  margin: 0 0.8rem;
  border-radius: 4px;
  border: none;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    background-color: rgb(43, 125, 233);
    box-shadow: 0 1px 2px 0 rgba(66, 133, 244, 0.3),
      0 1px 3px 1px rgba(66, 133, 244, 0.15);
  }
`;

export default SignInButton;
