const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    backgroundColor: ["dark", "hover"],
    textColor: ["dark", "hover"],
    boxShadow: ["dark", "hover", "focus"],
    borderRadius: ["dark"]
  },
  plugins: [require("tailwindcss-dark-mode")(), require("@tailwindcss/ui")]
};
