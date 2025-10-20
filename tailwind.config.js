const { gray } = require('@tailwindcss/typography/src/styles')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './**/*.html',
    './**/**/*.html'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        success: "#28A745",
        alert: "#ED1C24",
        warning: "#FFB703",
        black: "#020203",
        white: "#FFFFFF",
        gray: "#606364"
      },
      typography: {
        DEFAULT: {
          css: {
            pre: {
              padding: "0",
              color: "#1F2933",
              backgroundColor: "#F3F3F3"
            },
            code: {
              padding: "0.2em 0.4em",
              backgroundColor: "#F3F3F3",
              color: "#DD1144",
              fontWeight: "400",
              "border-radius": "0.25rem"
            },
            "code::before": false,
            "code::after": false,
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false
          },
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
      xs: ["13px", "16px"],
      sm: ["14px", "18px"],
      md: ["16px", "20px"],
      lg: ["18px", "23px"],
      xl: ["20px", "25px"],
      "2xl": ["24px", "30px"],
      "3xl": ["32px", "40px"],
      "4xl": ["36px", "45px"],
      "5xl": ["48px", "60px"]
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],

}