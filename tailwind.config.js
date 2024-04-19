/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'github-full-dark': '#24292e',
        'github-dark': "#2b3137",
        'github-light': '#fafbfc',
        'instagram-fade-top': '#f9ce34',
        'instagram-fade-middle': '#ee2a7b',
        'instagram-fade-bottom': '#6228d7',
        'linkedin-blue': '#0a66c2',
        'linkedin-dark-blue': '#004182'
      }
    },
  },
  plugins: [],
}

