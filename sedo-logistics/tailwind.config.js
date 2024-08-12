/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-page": "url('/heroPagebg.svg')",
        "triangleBg":"url('/diagonal-stripes.png')",
        "aboutBg":"url('/aboutBg.svg')",
        "cardBg":"url('/cardBg.svg')",
        "reviewCardBg":"url('/reviewCardBg.svg')",
        "footerBg":"url('/footer.svg')",
        "aboutHeroBg":"url('/AboutHeroBg.svg')",
        "about-cardBg":"url('/about-cardBg.svg')"

      },
    fontFamily: {
        raleway: 'var(--font-raleway)',
        openSans: 'var(--font-open-sans)',
        manrope: 'var(--font-manrope)'
      },
    colors: {
      primary: '#009AD6',
      secondary: '#004661',
    },

    },
  },
  plugins: [],
};
