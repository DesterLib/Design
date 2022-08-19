import React from "react";
import { styled } from "../../../theme/stitches.config";

const StyledImage = styled("img", {
  position: "absolute",
  top: "0",
  left: "0",
  bottom: "0",
  right: "0",
  boxSizing: "border-box",
  padding: "0",
  border: "none",
  margin: "auto",
  display: "block",
  width: "0",
  height: "0",
  minWidth: "100%",
  maxWidth: "100%",
  minHeight: "100%",
  maxHeight: "100%",
  objectFit: "cover",
  opacity: "1",
  variants: {
    transition: {
      true: {
        transition: "0.2s ease-out",
      },
    },
  },
});

type ImageProps = {
  className?: string;
  src: string;
};

const Image = ({ className, src, ...props }: ImageProps) => {
  return <StyledImage className={className} src={src} {...props} />;
};

export default Image;
