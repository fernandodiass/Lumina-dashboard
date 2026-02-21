/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}", // LIBERA AS CORES DO TREMOR
  ],
  theme: {
    extend: {
      colors: {
        // Cores personalizadas para o tema Dark
        darkfundo: "#030712",
        darkcard: "#0f172a",
      },
    },
  },
  plugins: [],
}