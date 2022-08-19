import React from "react";
import { styled } from "../../../theme/stitches.config";

const StyledStack = styled("div", {
  padding: "none",
  margin: "none",
  display: "flex",
  flexDirection: "column",
  variants: {
    direction: {
      row: {
        flexDirection: "row",
      },
      rowReverse: {
        flexDirection: "row-reverse",
      },
      column: {
        flexDirection: "column",
      },
      columnReverse: {
        flexDirection: "column-reverse",
      },
    },
  },
});

type StackProps = {
  children: React.ReactNode | any;
  divider?: React.ReactElement;
  direction?: "row" | "rowReverse" | "column" | "columnReverse";
};

const Stack: React.FC<StackProps> = ({
  children,
  divider,
  direction,
  ...props
}) => {
  console.log(divider);
  return (
    <StyledStack direction={direction} {...props}>
      {children && children.length > 0
        ? children.map((item: any, index: number) => (
            <React.Fragment key={index}>
              {index ? divider : null}
              {item}
            </React.Fragment>
          ))
        : children}
    </StyledStack>
  );
};

export default Stack;
