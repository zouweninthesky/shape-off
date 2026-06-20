import type { Meta, StoryObj } from "@storybook/react-vite";
import { Counter } from "./Counter";

const NOW = Date.now();
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

const meta = {
  title: "UI/Counter",
  component: Counter,
  tags: ["autodocs"],
  argTypes: {
    endsAt: {
      control: { type: "number" },
      description: "Absolute Unix timestamp (ms) when the countdown ends",
    },
    unitNumber: {
      control: { type: "radio", options: [1, 2, 3] },
      description: "Number of time units: 1 = seconds, 2 = MM:SS, 3 = HH:MM:SS",
    },
  },
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Full HH:MM:SS countdown with ~2h 46m 40s remaining.
 * The counter ticks live via requestAnimationFrame.
 */
export const FullCountdown: Story = {
  args: {
    endsAt: NOW + 2 * HOUR + 46 * MINUTE + 40 * SECOND,
    unitNumber: 3,
  },
};

/**
 * MM:SS countdown (2 units) with ~5m 30s remaining.
 * Useful for game round timers.
 */
export const MinutesSeconds: Story = {
  args: {
    endsAt: NOW + 5 * MINUTE + 30 * SECOND,
    unitNumber: 2,
  },
};

/**
 * Seconds-only countdown (1 unit) with ~45s remaining.
 * Compact display for quick turn timers.
 */
export const SecondsOnly: Story = {
  args: {
    endsAt: NOW + 45 * SECOND,
    unitNumber: 1,
  },
};

/**
 * Timer has already expired (deadline in the past).
 * All units should show `00` with the muted/empty styling.
 */
export const Expired: Story = {
  args: {
    endsAt: NOW - 1 * MINUTE,
    unitNumber: 3,
  },
};

/**
 * Exactly at zero — deadline equals current time.
 * Verifies the boundary condition renders correctly (00:00:00).
 */
export const ExactlyZero: Story = {
  args: {
    endsAt: NOW,
    unitNumber: 3,
  },
};

/**
 * Very long duration (> 24 hours).
 * The `% 24` clamping in formatCounterTime should wrap the hours unit.
 */
export const Over24Hours: Story = {
  args: {
    endsAt: NOW + 30 * HOUR + 15 * MINUTE + 0 * SECOND,
    unitNumber: 3,
  },
};

/**
 * HH:MM:SS with sub-1-hour time.
 * Verifies leading zeros work correctly (e.g. 00:45:30).
 */
export const UnderOneHour: Story = {
  args: {
    endsAt: NOW + 45 * MINUTE + 30 * SECOND,
    unitNumber: 3,
  },
};
