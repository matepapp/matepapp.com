const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
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
