import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import React from "react";
import IconOnlyButton from "../Buttons/IconButton";
import Modal from "./Modal";

const CardContainer = styled("div")<{
  variant: "portrait" | "landscape";
}>(({ variant }) => ({
  width: "100%",
  maxWidth: variant === "portrait" ? "220px" : "320px",
  "&:hover .main_container .card_image_wrapper .card_image": {
    opacity: "0.2",
  },
  "&:hover .button_wrapper_hidden": {
    opacity: "1",
  },
}));

const CardImage = styled("img")({
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
  transition: "0.2s ease-out",
  opacity: "1",
});

const CardImageWrapper = styled("div")<{ variant: "portrait" | "landscape" }>(
  ({ variant, theme }) => ({
    position: "relative",
    width: "100%",
    overflow: "hidden",
    paddingBottom: variant === "portrait" ? "150%" : "60%",
    backgroundColor: theme.palette.background.default,
    transition: "0.2s ease-out",
    borderRadius: theme.shape.borderRadius,
  })
);

const MainContainer = styled(motion.div)(({ theme }) => ({
  display: "flex",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  transition: "0.2s ease-out",
  "&:hover": {
    boxShadow: `0px 0px 0px 4px ${theme.palette.background.paper}`,
  },
}));

const CardTitle = styled(Typography)<{ component?: any }>(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: "10px 0px",
}));

const ButtonWrapperHidden = styled("div")(() => ({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  transition: "0.2s ease-out",
  height: "100%",
  width: "100%",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  opacity: "0",
}));

const TopButtons = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
}));

const CenterButtons = styled("div")(({ theme }) => ({
  display: "flex",
  margin: "auto",
  justifyContent: "space-between",
  "& .play_button": {
    padding: "15px",
    color: theme.palette.primary.main,
    // backgroundColor: theme.palette.text.primary,
    border: "none",
  },
  "&:hover .play_button": {
    color: theme.palette.primary.light,
  },
  "& .play_button .material-symbols-rounded": {
    fontSize: "40px",
    transition: "0.1s ease-out",
  },
}));

const BottomButtons = styled(motion.div)<{
  variant?: "portrait" | "landscape";
}>(({ variant }) => ({
  display: "flex",
  marginTop: "auto",
  marginLeft: "auto",
  marginRight: "auto",
  overflow: "hidden",
  // boxShadow:
  //   variant === "portrait"
  //     ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
  //     : "none",
  marginBottom: "10px",
  width: "calc(100% - 20px)",
  justifyContent: "space-between",
  // backgroundColor:
  //   variant === "portrait"
  //     ? alpha(theme.palette.background.paper, 0.7)
  //     : "none",
  padding: "4px",
  borderRadius: variant === "portrait" ? "25px" : "none",
  // backdropFilter: "blur(10px)",
  transition: "0.1s ease-out",
  // "&:hover": {
  //   backgroundColor:
  //     variant === "portrait"
  //       ? alpha(theme.palette.background.default, 0.7)
  //       : "none",
  // },
}));

type DefaultProps = {
  /**
   * Card variant
   */
  variant?: "portrait" | "landscape" | undefined;
  /**
   * Does the card require details button ?
   */
  showDetails?: boolean;
  /**
   * Does the card require favourites button ?
   */
  addToFavourite?: boolean;
  /**
   * Is the card disabled ?
   */
  title?: string;
  disabled?: boolean;
  image?: string;
  showRating?: boolean;
  rating?: string | number;
};

type CardProps = DefaultProps & React.ComponentProps<typeof CardContainer>;

const Card: React.FC<CardProps> = ({
  variant = "portrait",
  title = "Card Title",
  image,
  // showRating = false,
  // rating = '100',
  // showDetails,
  // addToFavourite,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpenModal = () => {
    setOpen(true);
  };
  const bottomButtonAnimation = {
    rest: {
      color: "grey",
      y: 10,
      opacity: 0,
      transition: {
        duration: 0.1,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      color: "blue",
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "tween",
        ease: "easeOut",
      },
    },
  };
  return (
    <CardContainer variant={variant}>
      <MainContainer
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="main_container"
      >
        <CardImageWrapper className="card_image_wrapper" variant={variant}>
          <CardImage className="card_image" src={image} />
        </CardImageWrapper>
        <ButtonWrapperHidden className="button_wrapper_hidden">
          <TopButtons>
            <Chip color="info" label="E1.S1" />
          </TopButtons>
          <CenterButtons>
            <IconOnlyButton
              className="play_button"
              size="large"
              color="secondary"
              icon="play_arrow"
            />
          </CenterButtons>
          <BottomButtons variant={variant} variants={bottomButtonAnimation}>
            <IconOnlyButton color="error" icon="favorite" />
            <IconOnlyButton
              onClick={handleClickOpenModal}
              color="info"
              icon="more_vert"
            />
          </BottomButtons>
        </ButtonWrapperHidden>
      </MainContainer>
      <CardTitle variant="h6" gutterBottom component="div">
        {title}
      </CardTitle>
      <Modal open={open} setOpen={setOpen} />
    </CardContainer>
  );
};

export default Card;
