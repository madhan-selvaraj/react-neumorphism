import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  all: unset;
  padding: 10px 20px;
  background: #e0e5ec;
  box-shadow: 5px 5px 10px #00000022,
    -3px -3px 5px #ffffffaa;
  border-radius: 20px;
  cursor: pointer;

  &:active {
  box-shadow: inset 5px 5px 10px #00000022,
    inset -3px -3px 5px #ffffffaa;
  }
`;

const Button: React.FC = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return <StyledButton {...props}>Submit</StyledButton>;
};

export default Button;
