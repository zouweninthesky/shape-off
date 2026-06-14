import type { Preview } from "@storybook/react-vite";
import "./preview.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center grow h-full w-full">
        <Story />
      </div>
    ),
  ],
};

export default preview;
