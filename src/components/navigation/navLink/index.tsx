import React from "react";
import { Link } from "react-router-dom";
import { styled } from "../../../theme/stitches.config";

type NavLinkProps = {
  router?: boolean;
  to?: string;
  children: React.ReactNode;
};

const StyledNavLink = styled(Link, {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  cursor: "pointer",
  color: "$textPrimary",
});

const NavLink: React.FC<NavLinkProps> = ({ to = "#/", children, ...props }) => {
  return (
    <StyledNavLink to={to} {...props}>
      {children}
    </StyledNavLink>
  );
};

export default NavLink;
