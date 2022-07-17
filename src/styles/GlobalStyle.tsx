import { createGlobalStyle, css } from 'styled-components';

import { breakpoints } from './breakpoints';
import { resetCSS } from './CSSReset';

export const GlobalStyle = createGlobalStyle(
    () => css`
        ${resetCSS}
        * {
            transition: all 250ms ease-in;
            transition-property: background, color, border;
        }
        /* cyrillic-ext */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nMrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nFrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* hebrew */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nDrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
        }
        /* latin-ext */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nPrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
                U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nBrXyw023e.woff2)
                format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
                U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nMrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nFrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* hebrew */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nDrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
        }
        /* latin-ext */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nPrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
                U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nBrXyw023e.woff2)
                format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
                U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nMrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nFrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* hebrew */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nDrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
        }
        /* latin-ext */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nPrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
                U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nBrXyw023e.woff2)
                format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
                U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nMrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nFrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* hebrew */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nDrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
        }
        /* latin-ext */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nPrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
                U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nBrXyw023e.woff2)
                format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
                U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nMrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nFrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* hebrew */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nDrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
        }
        /* latin-ext */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nPrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
                U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nBrXyw023e.woff2)
                format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
                U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 800;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nMrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 800;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nFrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* hebrew */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 800;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nDrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
        }
        /* latin-ext */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 800;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nPrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
                U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 800;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nBrXyw023e.woff2)
                format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
                U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 900;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nMrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 900;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nFrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* hebrew */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 900;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nDrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
        }
        /* latin-ext */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 900;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nPrXyw023e1Ik.woff2)
                format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF,
                U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 900;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/rubik/v20/iJWKBXyIfDnIV7nBrXyw023e.woff2)
                format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
                U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        body {
            margin: 0;
            font-family: 'Rubik', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }

        * {
            box-sizing: border-box;
        }

        a {
            text-decoration: none;
            color: #222;
        }

        .bolder {
            font-weight: 900;
        }

        .container {
            max-width: 1600px;
            margin: 0 auto;
            padding: 0 1.5rem;

            @media ${breakpoints.S} {
                padding: 0 4rem;
            }
        }

        .container-desktop {
            @media ${breakpoints.L} {
                max-width: 1600px;
                margin: 0 auto;
                padding: 0 1.5rem;
            }
        }

        .copyright {
            color: white;
            text-align: end;
        }

        .footer-bottom {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            margin-top: 1rem;
        }

        .footer-bottom div {
            padding-left: 1rem;
        }

        @media only screen and (max-width: 640px) {
            html {
                font-size: 14px;
            }
        }
        /* react-multi-carousel overrides */
        .carousel-item {
            padding-right: 20px;
            margin-left: 1px;
            transition: opacity 200ms linear;
        }

        .carousel-item:not(.react-multi-carousel-item--active) {
            opacity: 0.5;
        }

        .carousel-container {
            touch-action: pan-x;
        }
    `,
);
