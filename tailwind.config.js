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
