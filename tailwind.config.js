module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#7C3AED', // purple
            light: '#EDE9FE',   // light purple bg
          },
          accent: {
            DEFAULT: '#F59E42', // orange
            light: '#FFF7ED',   // light orange bg
          },
          sidebar: '#F3F4F6',   // sidebar bg
          card: '#FFFFFF',      // card bg
          text: {
            DEFAULT: '#22223B',
            muted: '#6B7280',
          },
        },
        borderRadius: {
          xl: '1.25rem',
        },
      },
    },
    plugins: [],
  }