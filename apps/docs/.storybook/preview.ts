import type { Preview } from "@storybook/react";
import "../output.css";
import "@global-x-etfs/gx-components/fonts.css";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    docs: {
      toc: true,
    },
    layout: "centered",
  },
};

export default preview;
