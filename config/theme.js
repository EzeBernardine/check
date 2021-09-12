const white = "#fff";
const black = "#111";
const transparent = "transparent";

const palette = {
  common: {
    black,
    white,
    transparent,
  },
  primary: {
    main: "#063159",

    white,
    black,
    transparent,
  },
  secondary: {
    main: "#E5AE40",
    0: "#F0A20D",
  },
  error: {
    100: "#FFA3A3",
    200: "#FB3838",
    300: "#FC0D1C",
    contrastText: white,
  },
  success: {
    0: "green",
    100: "#d6f0d6",
    200: '#e0eedf',
    contrastText: white,
  },
  warning: {
    main: "#FB3838",
    contrastText: white,
  },
  info: {
    0: "#197BBD",
    contrastText: white,
  },
  grey: {
    0: "#020a11",
    100: "#555656",
    200: "#b5b5b5",
    300: "#a6a6a6",
  },
  transparent: {
    0: "transparent",
    100: "#000000a8",
    200: "#EBEFEE",
    black: "#0000007d",
    primary: "#EDF6F5",
    primary100: "#e7f8f8",
  },
};

const shadows = {
  0: "0px 20px 40px rgba(0, 0, 0, 0.19)",
  100: "-2px 0px 5px -3px #5addcd",
  200: "0px 10px 20px rgba(24, 143, 50, 0.05)",
  300: "0px 4px 4px rgba(192, 189, 189, 0.25)",
  400: "0px 0px 9px rgba(192, 189, 189, 0.25)",
};

const typography = {
  fontFamily: {
    sagoe: "Sagoe",
    sagoeBold: "Sagoe-bold",
    sagoeItalic: "Sagoe-italic",
    robotoMedium: "Roboto-medium",
  },
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontWeightNormal: "normal",
  lineHeight: {
    lineHeight96: "96px",
    lineHeight69: "69px",
    lineHeight54: "54px",
    lineHeight50: "50px",
    lineHeight40: "40px",
    lineHeight37: "37px",
    lineHeight32: "32px",
    lineHeight30: "30px",
    lineHeight28: "28px",
    lineHeight27: "27px",
    lineHeight24: "24px",
    lineHeight23: "23px",
    lineHeight21: "21px",
    lineHeight20: "20px",
    lineHeight19: "19px",
    lineHeight16: "16px",
    lineHeight12: "12px",
    lineHeight10: "10px",
  },
};

const zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

export const spacing = {
  none: 0,
  space2: "2px",
  space4: "4px",
  space5: "5px",
  space6: "6px",
  space8: "8px",
  space10: "10px",
  space12: "12px",
  space16: "16px",
  space20: "20px",
  space21: "21px",
  space24: "24px",
  space30: "30px",
  space32: "32px",
  space33: "33px",
  space48: "48px",
  space96: "96px",
};

export const fontSizes = {
  font11: "11px", //11px
  font12: "0.75rem", //12px
  font13: "0.813rem", //13px
  font14: "14px", //14px
  font16: "1rem", //16px
  font18: "1.125rem", //18px
  font20: "1.25rem", //20px
  font22: "1.375rem", //22px
  font24: "24px", //28
  font28: "28px", //28
  font36: "36px", //36
  font40: "40px", //36
  font46: "46px", //46
  font64: "64px", //46
};

const shape = {
  borderRadius2: spacing["space2"],
  borderRadius4: spacing["space4"],
  borderRadius5: spacing["space5"],
  borderRadius6: spacing["space6"],
  borderRadius10: spacing["space10"],
  borderRadius12: spacing["space12"],
  borderRadius16: spacing["space16"],
  borderRadius21: spacing["space21"],
  borderRadius33: spacing["space33"],
};

export const theme = {
  palette,
  shadows,
  typography,
  zIndex,
  shape,
  fontSizes,
  spacing,
};
