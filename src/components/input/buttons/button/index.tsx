import React from "react";
import { styled, theme } from "../../../../theme/stitches.config";
import { motion } from "framer-motion";
import alpha from "../../../../utilities/alpha";

const StyledButton = styled(motion.button, {
  padding: "0px 15px",
  borderRadius: "$md",
  fontFamily: "$sans",
  textTransform: "uppercase",
  fontSize: "14px",
  height: "40px",
  fontWeight: "500",
  cursor: "pointer",
  border: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "background-color 0.4s ease",
  variants: {
    variant: {
      filled: {
        backgroundColor: "$primary500",
        color: "white",
        "&:hover": {
          backgroundColor: "$primary400",
        },
        "&:active": {
          backgroundColor: "$primary600",
        },
      },
      outlined: {
        color: "$primary500",
        backgroundColor: "transparent",
        boxShadow: "inset 0px 0px 0px 1px $colors$primary400",
        "&:hover": {
          boxShadow: "inset 0px 0px 0px 1px $colors$primary400",
        },
        "&:active": {
          boxShadow: "inset 0px 0px 0px 1px $colors$primary600",
        },
      },
      opaque: {
        color: "$primary500",
        backgroundColor: alpha(theme.colors.primary400.value, 0.1),
        "&:hover": {
          boxShadow: "none",
          backgroundColor: alpha(theme.colors.primary500.value, 0.2),
        },
      },
      transparent: {
        color: "$primary500",
        backgroundColor: "transparent",
        "&:hover": {
          boxShadow: "none",
          backgroundColor: alpha(theme.colors.primary500.value, 0.1),
        },
      },
    },
    link: {
      true: {
        color: "#ffffff",
        backgroundColor: alpha("#ffffff", 0.1),
        "&:hover": {
          boxShadow: "none",
          backgroundColor: alpha("#ffffff", 0.2),
        },
      },
    },
  },
});

type ButtonProps = {
  variant?: "filled" | "outlined" | "opaque" | "transparent";
  children: React.ReactNode;
  link?: boolean;
};

const Button: React.FC<ButtonProps> = (props, ref) => {
  const { variant = "filled", children } = props;
  return (
    <StyledButton
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      variant={variant}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
