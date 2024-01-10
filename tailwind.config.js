/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: '#0F2027',
          100: '#0F2027',
          200: '#203A43',
          300: '#2C5364',
          900: '#0F2027',
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-primary-gradient': {
          backgroundImage: 'linear-gradient(to right, var(--primary-100), var(--primary-200), var(--primary-300))',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
  darkMode: "class",
};
