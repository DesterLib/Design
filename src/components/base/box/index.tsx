import React from "react";
import { styled } from "../../../theme/stitches.config";

const StyledBox = styled("div", {
  padding: "none",
  margin: "none",
});

type BoxProps = {
  children: React.ReactNode;
};

const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};

export default Box;
