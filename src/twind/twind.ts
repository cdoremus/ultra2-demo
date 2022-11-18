import { cssomSheet, setup } from "twind";
import { virtualSheet } from "twind/sheets";

/**
 * Depending on if we are running server side (Deno) or on the browser
 * we construct a VirtualSheet OR a CSSStyleSheet which will be populated
 * with the injected CSSStyleSheet from the injected style tag below.
 */

export const sheet = typeof Deno !== "undefined" ? virtualSheet() : cssomSheet({
  target: (document.getElementById("__twind") as HTMLStyleElement).sheet ||
    undefined,
});

/**
 * Your theme configuration for twind
 */
const theme = {
  colors: {
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    black: "#000",
  }
};

setup({ sheet, theme });
