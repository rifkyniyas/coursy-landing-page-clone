module.exports = {
  content: ["./*.{html,js}"],
  theme: {

    extend: {
      backgroundImage: {
        'hero-image': "url('/images/hero-bg.svg')",
        'cta-image': "url('/images/cta-bg.svg')",
        'pricing-check-image': "url('/images/checkbox-btn-checked-1.svg')",
      },
      colors: {
        primary : '#01216e',
        secondary: 'hsla(0, 0%, 100%, 0.1)',
        gray : {
          light: 'rgba(255, 255, 255, 0.7)',
          hover: 'rgba(255, 255, 255, 0.8)',
          dark: '#eef2f5',
          text: "#6f737c"
        },
        black: '#1e2432',
        'hover-black': '#4b505b'
      },
      animation: {
        fade: 'fade 1s'
      },
      keyframes: {
        fade : {
          from: { opacity: 0.4 },
          to: { opacity: 1 }
        }
      }
    }
  },
  plugins: [],
}