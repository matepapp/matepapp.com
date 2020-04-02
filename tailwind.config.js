const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    backgroundColor: ["dark", "hover"],
    textColor: ["dark", "hover"],
    boxShadow: ["dark", "hover", "focus", "responsive"],
    borderRadius: ["dark"]
  },
  plugins: [require("tailwindcss-dark-mode")(), require("@tailwindcss/ui")]
};
