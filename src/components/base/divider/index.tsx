import React from "react";
import { styled } from "../../../theme/stitches.config";

const StyledDivider = styled("hr", {
  borderColor: "rgba(0, 0, 0, 0.12)",
  borderWidth: "0px 0px thin",
  borderStyle: "solid",
  height: "auto",
  width: "100%",
});

const Divider = () => {
  return <StyledDivider />;
};

export default Divider;
