import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mahogany: {
          DEFAULT: '#2A1610',
          50: '#F5E6E0',
          100: '#E8CCC0',
          200: '#C49980',
          300: '#9F6640',
          400: '#6B4020',
          500: '#2A1610',
          600: '#22120D',
          700: '#1A0E0A',
          800: '#110A07',
          900: '#090503',
        },
        gold: {
          DEFAULT: '#D4AF37',
          50: '#FDF8E8',
          100: '#F9EFC5',
          200: '#F0DC8A',
          300: '#E6C94F',
          400: '#D4AF37',
          500: '#B8962B',
          600: '#9A7D24',
          700: '#7C641D',
          800: '#5E4B16',
          900: '#40330F',
        },
        cream: {
          DEFAULT: '#F9F6F0',
          50: '#FFFFFF',
          100: '#FDFCFA',
          200: '#F9F6F0',
          300: '#F0E8D8',
          400: '#E7DAC0',
          500: '#DECBA8',
        },
        dark: {
          DEFAULT: '#1A1A1A',
          50: '#737373',
          100: '#666666',
          200: '#4D4D4D',
          300: '#333333',
          400: '#262626',
          500: '#1A1A1A',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 4px 20px rgba(42, 22, 16, 0.08)',
        'luxury-lg': '0 8px 40px rgba(42, 22, 16, 0.12)',
        'luxury-xl': '0 16px 60px rgba(42, 22, 16, 0.16)',
        'gold': '0 4px 20px rgba(212, 175, 55, 0.2)',
        'gold-lg': '0 8px 40px rgba(212, 175, 55, 0.3)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.8s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        shimmer: "shimmer 2s infinite linear",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
