const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
    whitelist: ["mode-dark"],
  },
  theme: {
    extend: {
      colors: {
        gray: {
          "50": "#fefefe",
          "100": "#f5f5f5",
          "200": "#eeeeee",
          "300": "#e0e0e0",
          "400": "#bdbdbd",
          "500": "#9e9e9e",
          "600": "#757575",
          "700": "#616161",
          "800": "#424242",
          "900": "#212121",
        },
        black: "#111111",
      },
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    backgroundColor: ["dark", "hover"],
    textColor: ["dark", "hover", "group-hover"],
    boxShadow: ["dark", "hover", "focus", "responsive"],
    borderRadius: ["dark"],
    scale: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [require("tailwindcss-dark-mode")(), require("@tailwindcss/ui")],
};
