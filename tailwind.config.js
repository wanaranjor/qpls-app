module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    uniformColorPalette: true,
    extendedFontSizeScale: true,
    // currently Sapper dev server chokes on this
    // applyComplexClasses: true,
  },
  purge: {
    // needs to be set if we want to purge all unused
    // @tailwind/typography styles
    mode: 'all',
    content: ['./src/**/*.svelte', './src/**/*.html'],
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      height: {
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
      }
      // ,
      // height: {
      //   "screen/2": "50vh",
      //   "screen/3": "calc(100vh / 3)",
      //   "screen/4": "calc(100vh / 4)",
      //   "screen/5": "calc(100vh / 5)",
      // }
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};