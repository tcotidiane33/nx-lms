const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      "{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}"
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      screens: {
        sm: "36rem", // 576px
        md: "48rem", // 768px
        lg: "62rem", // 992px
        xl: "75rem", // 1200px
        "2xl": "87.5rem", // 1400px
      },
      fontFamily: {
        dana: ["dana", "sans-serif"], // Add your custom font here
      },
      colors: {
        // Couleurs de base
        transparent: "transparent",
        current: "currentColor",
        

        // Palette noire et grise améliorée
        black: {
          DEFAULT: "#000000",
          10: "#f5f5f5",
          20: "#eeeeee",
          30: "#e0e0e0",
          50: "#9e9e9e",
          70: "#555555",
          90: "#1a1a1a",
        },

        // Palette grise étendue
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },

        // Couleurs principales avec variations
        primary: {
          DEFAULT: "var(--main-color, #4f46e5)", // Valeur par défaut si la variable CSS n'est pas définie
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },

        // Couleurs secondaires
        secondary: {
          DEFAULT: "#6c757d",
          50: "#f8f9fa",
          100: "#e9ecef",
          200: "#dee2e6",
          300: "#ced4da",
          400: "#adb5bd",
          500: "#6c757d",
          600: "#495057",
          700: "#343a40",
          800: "#212529",
          900: "#1a1e21",
        },

        // États et alertes
        success: {
          DEFAULT: "#28a745",
          50: "#e6f7eb",
          100: "#c3e8cd",
          200: "#9dd9ad",
          300: "#72c98c",
          400: "#4dbd6f",
          500: "#28a745",
          600: "#1e973b",
          700: "#0f852e",
          800: "#007722",
          900: "#005c16",
        },

        danger: {
          DEFAULT: "#dc3545",
          50: "#fde8ea",
          100: "#f9c5cb",
          200: "#f59fa9",
          300: "#f17885",
          400: "#ed5565",
          500: "#dc3545",
          600: "#c9303c",
          700: "#b52a33",
          800: "#a1252a",
          900: "#8b1e22",
        },

        warning: {
          DEFAULT: "#ffc107",
          50: "#fff9e6",
          100: "#ffecb3",
          200: "#ffe082",
          300: "#ffd54f",
          400: "#ffca28",
          500: "#ffc107",
          600: "#ffb300",
          700: "#ffa000",
          800: "#ff8f00",
          900: "#ff6f00",
        },

        info: {
          DEFAULT: "#17a2b8",
          50: "#e1f5fe",
          100: "#b3e5fc",
          200: "#81d4fa",
          300: "#4fc3f7",
          400: "#29b6f6",
          500: "#03a9f4",
          600: "#0398dc",
          700: "#0288d1",
          800: "#0277bd",
          900: "#01579b",
        },

        // Couleurs spécifiques au projet
        orange: {
          DEFAULT: "var(--orange, #ff7e00)",
          50: "#fff3e0",
          100: "#ffe0b2",
          200: "#ffcc80",
          300: "#ffb74d",
          400: "#ffa726",
          500: "#ff9800",
          600: "#fb8c00",
          700: "#f57c00",
          800: "#ef6c00",
          900: "#e65100",
        },

        // Couleurs supplémentaires utiles
        indigo: {
          DEFAULT: "#6610f2",
          50: "#f0e6ff",
          100: "#d4bfff",
          200: "#b794ff",
          300: "#9a67ff",
          400: "#7d3aff",
          500: "#6610f2",
          600: "#560dc2",
          700: "#460a92",
          800: "#360762",
          900: "#260432",
        },

        teal: {
          DEFAULT: "#20c997",
          50: "#e6fcf5",
          100: "#b3f5e0",
          200: "#80eeda",
          300: "#4dd7c4",
          400: "#26c0ae",
          500: "#20c997",
          600: "#1aa582",
          700: "#14826c",
          800: "#0e5f56",
          900: "#083c40",
        },
      },

      // Configuration de la typographie
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },

      // Autres extensions
      boxShadow: {
        soft: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        medium:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        hard: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    // require("@tailwindcss/line-clamp"),
    // require("@tailwindcss/container-queries"),
    // require("tailwind-scrollbar"),
    // require("tailwind-scrollbar-hide"),
  ],
};
