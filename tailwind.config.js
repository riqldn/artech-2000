/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D01B22",
        secondary: "#BC1B22",
        header: "#040404",
        body: "#252525",
        border: "#E4E4E4",
        card: "#F9F9F9",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      lineHeight:{
        'looser': '150%',
        'loose': '140%',
        'reg': '130%',
        'tight': '120%',
        'tighter': '100%',
        'tightest': '95%',
        'xtra': '90%',
      },
      letterSpacing:{
        'xtra': '-0.06rem',
        'tightest': '-0.04rem',
        'tight': '-0.02rem',
        'reg': '0rem'
      },
      fontSize:{
        'sm': '0.875rem',
        'md': '1.25rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '2.5rem',
        '3xl': '3rem',
        '4xl': '4rem'
      },
      fontFamily:{
        geist: ['var(--font-geist)'],
      }

    },
  },
  plugins: [],
};
