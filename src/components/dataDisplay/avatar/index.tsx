import React from "react";
import { styled } from "../../../theme/stitches.config";
import Box from "../../base/box";
import Image from "../image";

const StyledAvatar = styled(Image, {
  height: "40px",
  width: "40px",
});

type AvatarProps = {
  src: string;
};

const Avatar = (props: AvatarProps) => {
  const { src } = props;
  return (
    <Box>
      <StyledAvatar src={src} />
    </Box>
  );
};

export default Avatar;
