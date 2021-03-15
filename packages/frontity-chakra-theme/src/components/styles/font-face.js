import React from "react";
import { Global, css } from "frontity";

const FontFace = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Montserrat";
        font-weight: 700;
        font-display: swap;
      }
    `}
  />
);

export default FontFace;
