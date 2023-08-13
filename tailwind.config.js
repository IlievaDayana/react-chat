/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/Components/*.tsx"],
  theme: {
    extend: {
      animation: {
        wave1: "wave 1.3s linear infinite -1.3s",
        wave2: "wave 1.3s linear infinite -1.1s",
        wave3: "wave 1.3s linear infinite -0.9s",
      },
      colors: {
        "head-bg": "var(--head-bg)",
        "head-title": "var(--head-title)",
        "head-subtitle": "var(--head-subtitle)",
        "head-status": "var(--head-status)",
        "head-shadow": "var(--head-shadow)",

        "messages-bg": "var(--messages-bg)",
        "messages-initial-text": "var(--messages-initial-text)",

        "messages-assistant-bg": "var(--messages-assistant-bg)",
        "messages-assistant-text": "var(--messages-assistant-text)",
        "messages-assistant-shadow": "var(--messages-assistant-shadow)",
        "messages-assistant-options-bg": "var(--messages-assistant-options-bg)",
        "messages-assistant-options-shadow":
          "var(--messages-assistant-options-shadow)",

        "messages-user-bg": "var(--messages-user-bg)",
        "messages-user-text": "var(--messages-user-text)",
        "messages-user-shadow": "var(--messages-user-shadow)",

        "input-send-icon-bg": "var(--input-send-icon-bg)",
        "input-bg": "var(--input-bg)",
        "input-placeholder": "var(--input-placeholder)",
        "input-text-color": "var(--input-text-color)",
        "input-shadow": "var(--input-shadow)",

        "cta-button-bg": "var(--cta-button-bg)",
        "cta-button-color": "var(--cta-button-color)",
      },
      spacing: {
        12: "50px",
        2.5: "10px",
        7.5: "30px",
        15: "60px",
        2.75: "11px",
        5: "20px",
        3.75: "15px",
      },
      borderRadius: {
        custom: "20px",
      },
      maxWidth: {
        "375px": "375px",
      },
      keyframes: {
        wave: {
          "0%, 60%, 100%": { transform: "initial" },
          "30%": { transform: "translateY(-15px)" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss/plugin")(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "translate-z": (value) => ({
            "--tw-translate-z": value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }), // this is actual CSS
        },
        { values: theme("translate"), supportsNegativeValues: true }
      );
    }),
  ],
};
