import React from "react";
import { useSelector } from "react-redux";
import Box from "../../components/base/box";
import NavBar from "../../components/surfaces/navbar";
import Text from "../../components/text";
import { theme as lightTheme, darkTheme } from "../../theme/stitches.config";

const IntroductionPage = () => {
  const config = {
    logo: "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg",
  };
  const theme: any = useSelector((state: any) => state.theme.value);

  const text = [
    "title",
    "subTitle",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "body1",
    "body2",
    "caption",
  ];
  return (
    <Box
      // @ts-expect-error
      css={{ backgroundColor: "#c3c3c3" }}
      className={theme === "light" ? lightTheme : darkTheme}
    >
      <NavBar config={config} />
      {text.map((item: any, index: number) => (
        <Text key={index} variant={item}>Hello</Text>
      ))}
    </Box>
  );
};

export default IntroductionPage;
