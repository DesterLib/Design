import React from "react";
import { globalCss } from "./theme/stitches.config";
import IntroductionPage from "./docs/intro";

const App = () => {
  const globalStyles = globalCss({
    body: {
      fontFamily: "'Rubik', sans-serif",
      margin: "0px",
      padding: "0px",
    },
  });
  globalStyles();
  return (
    <div>
      <IntroductionPage />
    </div>
  );
};

export default App;
