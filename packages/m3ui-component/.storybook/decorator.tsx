import { StoryContext, StoryFn } from "@storybook/react";
// import {} from "m3ui-component";
import React from "react";

// https://storybook.js.org/docs/react/essentials/toolbars-and-globals#create-a-decorator
export function withThemeProvider(Story: StoryFn, context: StoryContext) {
  return (
    <>
      <Story />
    </>
  );
}
