import { configure, addParameters } from "@storybook/html";
import myTheme from "./n-theme";

addParameters({
  options: {
    showPanel: false,
    isToolshown: true,
    theme: myTheme
  }
});

configure(require.context("../src", true, /\.stories\.ts$/), module);
