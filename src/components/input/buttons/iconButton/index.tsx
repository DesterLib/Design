import React from "react";
import { styled, theme } from "../../../../theme/stitches.config";
import { motion } from "framer-motion";
import alpha from "../../../../utilities/alpha";
import IconWrapper from "../../../base/iconWrapper";

const StyledIconButton = styled(motion.button, {
  aspectRatio: "1/1",
  borderRadius: "50%",
  fontFamily: "$sans",
  letterSpacing: "1px",
  height: "40px",
  width: "40px",
  fontSize: "16px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "500",
  cursor: "pointer",
  border: "none",
  padding: "1px",
  transition: "background-color 0.4s ease",
  outline: "0",
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
        color: "$textPrimary",
        backgroundColor: alpha("#7f7f7f", 0.1),
        "&:hover": {
          boxShadow: "none",
          backgroundColor: alpha("#7f7f7f", 0.2),
        },
      },
    },
  },
});

type IconButtonProps = {
  variant?: "filled" | "outlined" | "opaque" | "transparent";
  children?: React.ReactNode;
  icon?: string;
  link?: boolean;
  onClick?: () => void;
};

const IconButton: React.FC<IconButtonProps> = React.forwardRef(
  (props, ref: any) => {
    const { variant = "filled", children, icon } = props;
    return (
      <StyledIconButton
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        variant={variant}
        {...props}
      >
        {children}
        {icon && <IconWrapper icon={icon} />}
      </StyledIconButton>
    );
  }
);

export default IconButton;
