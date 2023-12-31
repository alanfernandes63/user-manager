/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      opacity: {
        70: "70%",
      },
      screens: {
        sm: { max: "640px" },
        md: { max: "768px" },
        lg: { max: "2000px" },
      },
      colors: {
        colorTextInputWithoutFocus: "#efeeed",
        colorTextInputWithFocus: "#333333",
        colorBorder: "#efeeed",
        colorButton: "#00c8b3",
        colorBorderFocus: "#00c8b3",
        colorInvalidInput: "#eb4a46",
        colorBgDisabledButton: "#f6f6f6",
        colorFontButtonDisabled: "#dddcdc",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
