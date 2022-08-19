import React from "react";
import { motion } from "framer-motion";
import { styled } from "../../../theme/stitches.config";
import Image from "../image";

const CardContainer = styled("div", {
  width: "100%",
  variants: {
    variant: {
      portrait: {
        maxWidth: "220px",
      },
      landscape: {
        maxWidth: "320px",
      },
    },
  },
  "&:hover .main_container .card_image_wrapper .card_image": {
    opacity: "0.2",
  },
  "&:hover .button_wrapper_hidden": {
    opacity: "1",
  },
  "&:hover .button_wrapper": {
    opacity: "0",
  },
});

const CardImageWrapper = styled("div", {
  position: "relative",
  width: "100%",
  height: "100%",
  //   backgroundColor: theme.palette.background.default,
  transition: "0.2s ease-out",
  borderRadius: "$md",
  overflow: "hidden",
  variants: {
    variant: {
      portrait: {
        paddingBottom: "150%",
      },
      landscape: {
        paddingBottom: "60%",
      },
    },
  },
});

const MainContainer = styled(motion.div, {
  display: "flex",
  position: "relative",
  //   borderRadius: theme.shape.borderRadius,
  transition: "0.2s ease-out",
  "&:hover": {
    // boxShadow: `0px 0px 0px 4px ${theme.palette.background.paper}`,
  },
});

const CardTitle = styled("div", {
  //   color: theme.palette.text.primary,
  padding: "10px 0px",
  fontSize: "1.2rem",
  margin: "0px",
});

const ButtonWrapperHidden = styled("div", {
  position: "absolute",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  transition: "0.2s ease-out",
  height: "100%",
  width: "100%",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  opacity: "0",
});

const ButtonWrapper = styled("div", {
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
  opacity: "1",
});

const TopButtons = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
});

const CenterButtons = styled("div", {
  position: "absolute",
  height: "100%",
  left: "0",
  right: "0",
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& .play_button": {
    padding: "15px",
    // color: theme.palette.primary.main,
    border: "none",
  },
  "&:hover .play_button": {
    // color: theme.palette.primary.light,
  },
  "& .play_button .material-symbols-rounded": {
    fontSize: "40px",
    transition: "0.1s ease-out",
  },
});

const BottomButtons = styled(motion.div, {
  display: "flex",
  marginTop: "auto",
  marginLeft: "auto",
  marginRight: "auto",
  overflow: "hidden",
  marginBottom: "10px",
  width: "calc(100% - 20px)",
  justifyContent: "space-between",
  padding: "4px",
  transition: "0.1s ease-out",
});

type CardProps = {
  variant?: "portrait" | "landscape";
  showDetails?: boolean;
  addToFavourite?: boolean;
  title?: string;
  disabled?: boolean;
  image: string;
  showRating?: boolean;
  rating?: string | number;
  as?: React.ElementType;
};

const Card: React.FC<CardProps> = ({
  variant = "portrait",
  title = "Card Title",
  image,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpenModal = () => {
    setOpen(true);
  };
  const [width, setWidth] = React.useState("");
  const cardRef = React.useCallback((node: any) => {
    if (node !== null) {
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);
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
        ref={cardRef}
      >
        <CardImageWrapper className="card_image_wrapper" variant={variant}>
          <Image className="card_image" src={image} />
        </CardImageWrapper>
        <ButtonWrapper className="button_wrapper">
          <TopButtons>
            {/* <Badge color="info" label="E1.S1" />
            <CircularRating value={80} /> */}
          </TopButtons>
        </ButtonWrapper>
        <ButtonWrapperHidden className="button_wrapper_hidden">
          <CenterButtons>
            {/* <IconOnlyButton
              className="play_button"
              size="large"
              color="secondary"
              icon="play_arrow"
            /> */}
          </CenterButtons>
          <BottomButtons variants={bottomButtonAnimation}>
            {/* <IconOnlyButton color="error" icon="favorite" />
            <IconOnlyButton
              onClick={handleClickOpenModal}
              color="info"
              icon="more_vert"
            /> */}
          </BottomButtons>
        </ButtonWrapperHidden>
      </MainContainer>
      <CardTitle as="h6">{title}</CardTitle>
      {/* <DetailsModal open={open} setOpen={setOpen} /> */}
    </CardContainer>
  );
};

export default Card;
