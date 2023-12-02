import { Preview } from "@storybook/react";
import { withThemeProvider } from "./decorator";

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
          name: "liveconnect",
          value: "#040404",
        },
      ],
      default: "liveconnect",
    },
  },
  decorators: [withThemeProvider],
};

export default preview;
