import { StoryContext, StoryFn } from "@storybook/react";
// import {} from "m3ui-component";
import "material-icons/iconfont/material-icons.css";
import "material-symbols";
import React from "react";
import { ThemeProvider } from "../lib/core";

export function withThemeProvider(Story: StoryFn, context: StoryContext) {
  const { globals } = context;
  return (
    <ThemeProvider
      theme={{
        mode: globals.theme,
      }}
    >
      <Story />
    </ThemeProvider>
  );
}
