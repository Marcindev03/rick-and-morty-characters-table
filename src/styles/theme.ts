import { extendTheme } from "@chakra-ui/react";

const config = {
  fonts: {
    heading: `'Oswald', sans-serif`,
    body: `'Oswald', sans-serif`,
  },
  colors: {
    primaryWhite: {
      400: "#FFFFFF",
    },
    primaryBlueLight: {
      100: "#F5F8FD",
    },
    primaryAnthracite: {
      100: "#1A2328",
      80: "#484F53",
      70: "#5F6569",
      50: "#8C9193",
      25: "#C6C8C9",
    },
    secondaryBluePale: {
      40: "#BAC6D8",
      30: "#CBD4E2",
      15: "#E5EAF0",
      10: "#EEF1F5",
      5: "#F6F8FA",
      100: "#0088DA",
    },
    saturatedRed: {
      100: "#FF2626",
    },
  },
  styles: {
    global: {
      "html, body": {
        backgroundColor: "primaryBlueLight.100",
      },
    },
  },
};

export const theme = extendTheme(config);
