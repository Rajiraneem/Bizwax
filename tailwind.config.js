module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        impact: ['ImpactCustom', 'sans-serif'],
        bauhaus: ['BauhausRegular', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        floating: 'customFloat 1.5s ease-in-out infinite','custom-float': 'customFloat 1.5s ease-in-out infinite',
        borderAnimation: 'borderAnimation 15s ease-in-out infinite',
        rotateDown: 'rotateDown 0.5s ease forwards',
        rotateUp: 'rotateUp 0.5s ease forwards',
      },
    },
  },
  plugins: [],
};
