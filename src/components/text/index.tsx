import React from "react";
import { styled } from "../../theme/stitches.config";
import Box from "../base/box";

const StyledText = styled(Box, {
  variants: {
    variant: {
      title: {
        fontSize: "1.75rem",
        fontWeight: "400",
        lineHeight: "1.3",
      },
      subTitle: {
        fontSize: "1.25rem",
        fontWeight: "400",
        lineHeight: "1.2",
      },
      h1: {
        fontSize: "6rem",
        fontWeight: "300",
        lineHeight: "1.167",
      },
      h2: {
        fontSize: "3.75rem",
        fontWeight: "300",
        lineHeight: "1.2",
      },
      h3: {
        fontSize: "3rem",
        fontWeight: "400",
        lineHeight: "1.167",
      },
      h4: {
        fontSize: "2.125rem",
        fontWeight: "400",
        lineHeight: "1.235",
      },
      h5: {
        fontSize: "1.5rem",
        fontWeight: "400",
        lineHeight: "1.334",
      },
      h6: {
        fontSize: "1.25rem",
        fontWeight: "500",
        lineHeight: "1.6",
      },
      body1: {
        fontSize: "1rem",
        fontWeight: "400",
        lineHeight: "1.5",
      },
      body2: {
        fontSize: "0.875rem",
        fontWeight: "400",
        lineHeight: "1.43",
      },
      caption: {
        fontSize: "0.75rem",
        fontWeight: "400",
        lineHeight: "1.66",
      },
    },
  },
});

type TextProps = {
  variant?:
    | "title"
    | "subTitle"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "caption";
  children: React.ReactNode;
};

const Text = ({ variant = "body1", children }: TextProps) => {
  return <StyledText variant={variant}>{children}</StyledText>;
};

export default Text;
