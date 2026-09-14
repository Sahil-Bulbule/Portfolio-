/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        silver: {
          DEFAULT: "#BFC3C7",
          hover: "#FFFFFF",
        },
        dark: {
          black: "#000000",
          parent: "#181818",
          child: "#222222",
          childAlt: "#252525",
          childHover: "#292929",
          input: "#161616",
        },
        content: {
          primary: "#F2F2F2",
          secondary: "#CCCCCC",
          muted: "#A3A3A3",
          highlight: "#BFC3C7",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      screens: {
        xs: "420px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
