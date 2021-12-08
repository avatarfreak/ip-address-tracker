const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      fontSize: {
        "fs-700": "var(--fs-700)",
        "fs-600": "var(--fs-600)",
        "fs-500": "var(--fs-500)",
        "fs-400": "var(--fs-400)",
        "fs-300": "var(--fs-300)",
        "fs-200": "var(--fs-200)",
        "fs-100": "var(--fs-100)",
      },
      fontFamily: {
        serif: "var(--ff-serif)",
      },
      colors: {
        "clr-100": "var(--clr-100)",
        "clr-110": "var(--clr-110)",
      },
      letterSpacing: {
        "t-100": "var(--space-100)",
        "t-200": "var(--space-200)",
        "t-300": "var(--space-300)",
        "t-400": "var(--space-400)",
        "t-500": "var(--space-500)",
        "t-600": "var(--space-600)",
        "t-700": "var(--space-700)",
      },
      backgroundImage: {
        "header": `url(${prefix}/images/pattern-bg.png)`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
