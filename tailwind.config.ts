import { version } from "os";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {

      },
      colors: {
        "facebook-blue": "#1877f2"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        typing: 'typing 2s steps(6), blink 1s',
      },
      keyframes: {
        typing: {
          from: {
            width: '0'
          }
        }
      }
    },
  },
  variants: {
    fill: [ 'hover', 'focus' ]
  },
  plugins: [
    require('tailwind-fontawesome')({
      version: 6
    })
  ],
};
export default config;
