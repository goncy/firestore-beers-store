import styled from "styled-components";

const Button = styled.button`
  background: cornflowerblue;
  padding: ${({ size = 2 }) => `${size * 6}px ${size * 8}px`};
  color: white;
  border-radius: 4px;
  border: none;
  font-size: 18px;

  & + & {
    margin-left: 12px;
  }
`;

export default Button;
