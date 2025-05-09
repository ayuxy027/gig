/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          orange: "#FF6B00",
          gold: "#FFC107",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        background: {
          dark: "#1a1a1a",
          card: "rgba(30, 30, 30, 0.7)",
        },
        border: {
          light: "rgba(255, 255, 255, 0.1)",
        },
        chain: {
          ethereum: "#FF6B00",
          base: "#0052FF",
          binance: "#F0B90B",
          arbitrum: "#28A0F0",
          polygon: "#8247E5",
          optimism: "#FF0420",
        },
        icon: {
          ethereum: "#627EEA",
          base: "#0052FF",
          binance: "#F0B90B",
          arbitrum: "#28A0F0",
          polygon: "#8247E5",
          optimism: "#FF0420",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        pixel: ["Pixelify Sans", "cursive"],
        game: ["Press Start 2P", "cursive"],
        retro: ["VT323", "monospace"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero/hero-bg.png')",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
