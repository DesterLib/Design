import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import Chip, { ChipProps } from "@mui/material/Chip";
import { useNavigate } from "react-router-dom";
import IconWrapper from "../IconWrapper";

export interface BadgeProps extends ChipProps {
  color?: "primary" | "secondary" | "info" | "warning" | "error";
  link?: string;
  pill?: boolean;
}

const StyledChip = styled(Chip)<BadgeProps>(({ theme, color, pill, link }) => ({
  padding: "5px",
  borderRadius: pill ? "16px" : theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette[color || "primary"].light, 0.1),
  color: theme.palette[color || "primary"].main,
  "&:hover": {
    backgroundColor: link
      ? alpha(theme.palette[color || "primary"].light, 0.2)
      : alpha(theme.palette[color || "primary"].light, 0.1),
    color: theme.palette[color || "primary"].main,
  },
}));

const Badge = ({
  color = "primary",
  label,
  link,
  pill,
  icon,
  ...props
}: BadgeProps) => {
  const navigate = useNavigate();
  return (
    <StyledChip
      size="small"
      pill={pill}
      color={color}
      label={label}
      icon={<IconWrapper name={icon} />}
      link={link}
      {...(link && { onClick: () => navigate(link, { replace: true }) })}
      {...props}
    />
  );
};

export default Badge;
