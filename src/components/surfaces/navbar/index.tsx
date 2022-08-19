import React from "react";
import Box from "../../base/box";
import { styled } from "../../../theme/stitches.config";
import Button from "../../input/buttons/button";
import IconButton from "../../input/buttons/iconButton";
import NavLink from "../../navigation/navLink";
import DropdownMenuDemo from "../../navigation/navMenu";
import { useSelector } from "react-redux";

const StyledNavBarContainer = styled(Box, {
  height: "60px",
  display: "flex",
  padding: "0px 30px",
  alignItems: "center",
  backgroundColor: "$backgroundPaper",
  justifyContent: "space-between",
});

const StyledLogo = styled("img", {
  minWidth: "130px",
  maxWidth: "170px",
  maxHeight: "50px",
  padding: "5px",
});

const StyledNavMenu = styled(Box, {
  width: "fit-content",
  padding: "5px",
  display: "flex",
  alignItems: "center",
  "& > *": {
    marginLeft: "10px",
  },
});

const NavBar = ({ config }: any) => {
  const theme: any = useSelector((state: any) => state.theme.value);
  return (
    <StyledNavBarContainer>
      <NavLink>
        <StyledLogo src={config.logo} />
      </NavLink>
      {/* <StyledNavMenu>
        <NavLink>
          <Button link>Browse</Button>
        </NavLink>
        <NavLink>
          <Button link>Categories</Button>
        </NavLink>
        <NavLink>
          <IconButton icon="home" link variant="transparent" />
        </NavLink>
      </StyledNavMenu> */}
      <DropdownMenuDemo theme={theme} />
    </StyledNavBarContainer>
  );
};

export default NavBar;
