import MuiButton, { ButtonProps } from "@mui/material/Button";
import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import IconWrapper from "../../IconWrapper";

export interface StyledButtonProps extends ButtonProps {
  icon?: string;
  whileHover?: any;
  whileTap?: any;
  color: "primary" | "secondary" | "success" | "error" | "info" | "warning";
  component?: React.ElementType;
}

const StyledButton = styled(MuiButton)<StyledButtonProps>(
  ({ color, theme }) => ({
    color: theme.palette[color || "primary"].contrastText,
    fontWeight: "600",
    fontSize: "16px",
    border: `2px solid ${alpha(theme.palette[color || "primary"].light, 0.1)}`,
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
    },
  })
);

const Button = ({
  icon,
  startIcon,
  children,
  size = "medium",
  color = "primary",
  ...props
}: StyledButtonProps) => {
  return (
    <StyledButton
      startIcon={
        startIcon && (
          <IconWrapper
            sx={{ paddingTop: "4px", paddingBottom: "4px" }}
            name={startIcon}
          />
        )
      }
      variant="contained"
      color={color}
      size={size}
      {...props}
      component={motion.button}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && (
        <IconWrapper
          style={{ paddingTop: "4px", paddingBottom: "4px" }}
          name={icon}
        />
      )}
      {children}
    </StyledButton>
  );
};

export default Button;
