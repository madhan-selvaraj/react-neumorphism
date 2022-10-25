import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: #e0e5ec;
  padding: 20px;
`;

const Paper: React.FC<React.PropsWithChildren> = (
  props: React.HTMLAttributes<HTMLDivElement>
) => {
  const { children, ...rest } = props;

  return <StyledDiv {...rest}>{children}</StyledDiv>;
};

export default Paper;
