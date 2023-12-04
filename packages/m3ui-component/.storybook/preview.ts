import { Preview } from "@storybook/react";
import { COLOR_MODE, defaultPalette } from "../lib/core";
import { createTheme } from "../lib/utils/theme.util";
import { withThemeProvider } from "./decorator";

const theme = createTheme(defaultPalette);
const darkTheme = createTheme(defaultPalette, COLOR_MODE.DARK);

const preview: Preview = {
  // https://storybook.js.org/docs/react/essentials/toolbars-and-globals#globals
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        icon: "mirror",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    backgrounds: {
      values: [
        {
          name: "light",
          value: theme.surface,
        },
        {
          name: "dark",
          value: darkTheme.surface,
        },
      ],
      default: "light",
    },
  },
  decorators: [withThemeProvider],
};

export default preview;
