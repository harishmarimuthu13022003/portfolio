/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          900: '#161633',
          800: '#23234d',
          700: '#2d2d5a',
        },
        primary: {
          50: '#f7f7fa',
          100: '#ececf6',
          200: '#d6d6e7',
          300: '#b8b8d9',
          400: '#a0a0c7',
          500: '#7c7cb3',
          600: '#5a5a99',
          700: '#3d3d7a',
          800: '#23234d',
          900: '#161633',
        },
        accent: {
          100: '#ffb86b',
          200: '#ffcb8e',
          300: '#ffe0b2',
        },
        secondary: {
          100: '#ffffff',
          200: '#f3f3f3',
          300: '#ededed',
        },
      },
      fontFamily: {
        'primary': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'system-ui', 'sans-serif'],
        'mono': ['Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "linear-gradient(135deg, rgba(30, 64, 175, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)",
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}