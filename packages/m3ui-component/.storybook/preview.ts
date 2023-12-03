import { Preview } from "@storybook/react";
import { COLOR_MODE, defaultPallete } from "../lib/core";
import { createTheme } from "../lib/utils/theme.util";
import { withThemeProvider } from "./decorator";

const theme = createTheme(defaultPallete);
const darkTheme = createTheme(defaultPallete, COLOR_MODE.DARK);

const preview: Preview = {
  // https://storybook.js.org/docs/react/essentials/toolbars-and-globals#globals
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "dark",
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
    },
  },
  decorators: [withThemeProvider],
};

export default preview;
