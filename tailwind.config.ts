import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2A2A72",
        accent: "#5A5AF2",
        silver: "#C0C0C0",
        dark: "#1A1A1A",
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(90, 90, 242, 0.35)",
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at 20% 20%, rgba(90, 90, 242, 0.25), transparent 50%), radial-gradient(circle at 80% 30%, rgba(42, 42, 114, 0.4), transparent 55%), linear-gradient(180deg, #10101f 0%, #1A1A1A 55%, #141427 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
