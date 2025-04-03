/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", ...fontFamily.sans],
        poppins: ["Poppins", ...fontFamily.sans],
        roboto: ["Roboto", ...fontFamily.sans],
        italiana: ["Italiana", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
