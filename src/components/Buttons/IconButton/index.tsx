import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import IconWrapper from "../../IconWrapper";
import MuiIconButton, { IconButtonProps } from "@mui/material/IconButton";

export interface StyledIconButtonProps extends IconButtonProps {
  icon?: string;
  color?: "primary" | "secondary" | "info" | "warning" | "error";
  colorBackground?: boolean;
  whileHover?: any;
  whileTap?: any;
  component?: React.FC | string;
}

const StyledButton = styled(MuiIconButton)<StyledIconButtonProps>(
  ({ theme, color, colorBackground }) => ({
    fontWeight: "600",
    height: "fit-content",
    fontSize: "16px",
    color: colorBackground
      ? theme.palette.text.primary
      : theme.palette.common.white,
    boxShadow: colorBackground
      ? `0px 0px 0px 2px ${alpha(theme.palette.background.default, 0.8)}`
      : `0px 0px 0px 2px ${alpha(theme.palette[color || "primary"].main, 0.8)}`,
    transition: "0.2s ease",
    transitionProperty: "box-shadow, background-color",
    backgroundColor: colorBackground
      ? theme.palette.background.default
      : theme.palette[color || "primary"].main,
    "&:hover": {
      color: colorBackground
        ? theme.palette.text.primary
        : theme.palette.common.white,
      backgroundColor: colorBackground
        ? theme.palette.background.default
        : theme.palette[color || "primary"].dark,
      boxShadow: colorBackground
        ? `0px 0px 0px 2px ${alpha(theme.palette.background.default, 1)}`
        : `0px 0px 0px 2px ${alpha(theme.palette[color || "primary"].main, 1)}`,
    },
  })
);

const IconButton = ({
  icon,
  size = "medium",
  color = "primary",
  colorBackground,
  ...props
}: StyledIconButtonProps) => {
  return (
    <StyledButton
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      color={color}
      component={motion.button}
      colorBackground={colorBackground}
      size={size}
      {...props}
    >
      <IconWrapper name={icon} />
    </StyledButton>
  );
};

export default IconButton;
