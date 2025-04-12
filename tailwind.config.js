module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
        float: 'float 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
