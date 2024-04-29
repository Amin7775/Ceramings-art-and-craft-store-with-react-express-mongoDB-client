/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color-1': '#BA9D79',
        'custom-color-2': '#1B1B1B',
        'custom-color-3': '#F5F5F5',
        'custom-color-4': '#F2F2F2',
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

