import { createCn } from "cn/config";

/**
 * `cn` resolves conflicting Tailwind classes by keeping the last one. It knows
 * the default theme, but not our custom `--text-*` scale — so without this it
 * reads `text-section` as a *colour* and drops it when it sits next to
 * `text-ink`, silently collapsing headings to the base font size.
 *
 * Every custom key added to the `--text-*` scale in globals.css must be listed
 * here as well.
 */
export const cn = createCn({
  extend: {
    theme: {
      text: ["hero", "section", "wordmark", "body-sm"],
    },
  },
});
