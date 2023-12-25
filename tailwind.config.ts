import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // https://www.figma.com/file/JOHGaqs67K52ZSj32xF8Bd/Weboldal?node-id=12%3A1075
        dark: "#231F20",
        darkmode_regular: "#333333",
        light: "#F8F8F8",
        white: "#FFFFFF",
        simonyi_zold: {
          DEFAULT: "#63BC47",
          50: "#f4fbf2",
          100: "#e6f7e1",
          200: "#cfedc5",
          300: "#a9dd98",
          400: "#7bc563",
          500: "#63bc47",
          600: "#448b2e",
          700: "#376e27",
          800: "#2f5823",
          900: "#28481f",
          950: "#11270c",
        },
        simonyi_sarga: {
          DEFAULT: "#FFFF3C",
          50: "#fcfee8",
          100: "#faffc2",
          200: "#faff89",
          300: "#ffff3c",
          400: "#fdf312",
          500: "#ecd906",
          600: "#ccab02",
          700: "#a37b05",
          800: "#86600d",
          900: "#724e11",
          950: "#432a05",
        },
      },
      fontSize: {
        h1: [
          "32px",
          {
            fontWeight: "600",
            lineHeight: "35px",
          },
        ],
        h2: [
          "24px",
          {
            fontWeight: "600",
            lineHeight: "26px",
          },
        ],
        h3: [
          "20px",
          {
            fontWeight: "600",
            lineHeight: "22px",
          },
        ],
        h4: [
          "16px",
          {
            fontWeight: "600",
            lineHeight: "17px",
          },
        ],
        body: [
          "16px",
          {
            fontWeight: "400",
            lineHeight: "24px",
          },
        ],
        label: [
          "14px",
          {
            fontWeight: "400",
            lineHeight: "20px",
          },
        ],
      },
      fontFamily: {
        // https://www.figma.com/file/JOHGaqs67K52ZSj32xF8Bd/Weboldal?node-id=12%3A1076
        heading: ["var(--font-archivo)", ...fontFamily.sans],
        body: ["var(--font-space_grotesk)", ...fontFamily.sans],
        archivo: ["var(--font-archivo)", ...fontFamily.sans],
        space_grotesk: ["var(--font-space-grotesk)", ...fontFamily.sans],
      },
      screens: {
        sm: "30em",
        msm: "40em",
        md: "51em",
        lg: "70em",
        xl: "80em",
        "2xl": "96em",
      },
      maxWidth: {
        home: "1492px",
      },
      minHeight: {
        safe_screen: "100svh",
      },
      opacity: {
        text: "0.92",
        button: "0.16",
      },
      blur: {
        home: "10px",
      },
      gridTemplateColumns: {
        "timeline-full": "calc(50% - 50px) 100px calc(50% - 50px)",
        "timeline-mobile": "100px calc(100% - 100px)",
      },
    },
    darkMode: ["class", '[data-theme="dark"]'],
  },
  plugins: [],
} satisfies Config;

export default config;
