import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        astroOrange: "#e45f44",
        astroLightOrange: "#fdd664",
        astroDark: "#15161a",
      },
    },
  },
  plugins: [],
} satisfies Config