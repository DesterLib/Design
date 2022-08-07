import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import React from "react";
import IconButton from "../Buttons/IconButton";
import Button from "../Buttons/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Badge from "../Badge";
import { staggerOne, modalFadeInUpVariants } from "../../motionUtils";
import Menu from "../Menu";

export interface ModalProps extends DialogProps {
  open: boolean;
  transition?: any;
  setOpen: (value: boolean) => void;
}

export interface AnimatedProps extends BoxProps {
  variants: {};
  initial: string;
  animate: string;
  exit: string;
}

const ImageWrapper = styled(Box)({
  position: "relative",
});

const ButtonContainer = styled(motion.div)({
  padding: "20px",
  display: "flex",
  justifyContent: "space-between",
  "& .left > *": {
    marginRight: "15px !important",
  },
});

const Gradiant = styled(Box)(({ theme }) => ({
  background: `linear-gradient(0deg, ${theme.palette.background.default} 0%, rgba(255,255,255,0) 100%)`,
  width: "100%",
  height: "100%",
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: "1",
}));

const Image = styled("img")({
  width: "100%",
  aspectRatio: "21/9",
  opacity: "0.8",
  objectFit: "cover",
});

const TopBar = styled(Box)({
  position: "absolute",
  zIndex: "5",
  padding: "10px",
  width: "100%",
  display: "flex",
  justifyContent: "end",
  top: "0",
  left: "0",
  overflow: "hidden",
});

const MainContainer = styled(Box)({
  width: "100%",
});

const SubContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.background.default,
}));

const InfoContainer = styled(Box)<AnimatedProps>(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.background.default,
  padding: "20px",
}));

const Modal: React.FC<ModalProps> = ({ open, setOpen }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleCloseDialog = () => {
    setOpen(false);
  };
  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const options = [
    {
      name: "Hello",
      onClick: () => console.log("test"),
    },
    {
      name: "Hi",
      icon: "add",
      onClick: () => console.log("test"),
    },
    {
      name: "Hi",
      icon: "add",
      onClick: () => console.log("test"),
    },
    {
      name: "Hi",
      icon: "add",
      onClick: () => console.log("test"),
    },
  ];

  return (
    <AnimatePresence exitBeforeEnter>
      <Dialog maxWidth="md" onClose={handleCloseDialog} open={open}>
        <MainContainer>
          <TopBar>
            <IconButton
              color="secondary"
              colorBackground
              onClick={handleCloseDialog}
              icon="close"
            />
          </TopBar>
          <SubContainer>
            <ImageWrapper>
              <Image src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/qC1qstACJmqhUlPMa7jqJTKrtPr.jpg" />
              <Gradiant />
            </ImageWrapper>
            <ButtonContainer variants={modalFadeInUpVariants}>
              <Box className="left">
                <Button color="primary" startIcon="play_arrow">
                  Play
                </Button>
                <IconButton
                  aria-controls={openMenu ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                  onClick={handleClickMenu}
                  color="secondary"
                  icon="add"
                />
                <Menu
                  id="basic-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleCloseMenu}
                  options={options}
                />
                <IconButton color="error" icon="favorite" />
              </Box>
              <Box className="right">
                <IconButton color="info" icon="link" />
              </Box>
            </ButtonContainer>
            <InfoContainer
              component={motion.div}
              variants={staggerOne}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Typography
                component={motion.div}
                variants={modalFadeInUpVariants}
                variant="h5"
              >
                Uncharted (2022)
              </Typography>
              <Typography
                component={motion.div}
                variants={modalFadeInUpVariants}
                paragraph
              >
                A young street-smart, Nathan Drake and his wisecracking partner
                Victor “Sully” Sullivan embark on a dangerous pursuit of “the
                greatest treasure never found” while also tracking clues that
                may lead to Nathan's long-lost brother.
              </Typography>
            </InfoContainer>
            <Divider sx={{ width: "calc(100% - 80px)", margin: "auto" }} />
            <Box sx={{ padding: "20px" }}>
              <Box>
                <Typography component="div">
                  Genres :
                  <Badge
                    sx={{ marginLeft: "5px" }}
                    color="info"
                    label="Action"
                  />
                  <Badge
                    sx={{ marginLeft: "5px" }}
                    color="error"
                    label="Romance"
                  />
                  <Badge
                    sx={{ marginLeft: "5px" }}
                    color="warning"
                    label="Mystery"
                  />
                  <Badge
                    sx={{ marginLeft: "5px" }}
                    color="warning"
                    label="Mystery"
                  />
                  <Badge
                    sx={{ marginLeft: "5px" }}
                    color="warning"
                    label="Mystery"
                  />
                </Typography>
              </Box>
            </Box>
          </SubContainer>
        </MainContainer>
      </Dialog>
    </AnimatePresence>
  );
};

export default Modal;
