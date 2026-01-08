/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Krémovo-béžová elegancia
        primary: {
          50: '#FBF8F4',
          100: '#F7F1E9',
          200: '#EFE3D3',
          300: '#E8DCC8',
          400: '#D4B896',
          500: '#C4A67A',
          600: '#B08F5C',
          700: '#8C6F45',
          800: '#685232',
          900: '#443620',
          950: '#221B10',
        },
        accent: {
          50: '#FDF5F6',
          100: '#FBEBED',
          200: '#F5D1D6',
          300: '#E8B1B9',
          400: '#D4909A',
          500: '#B76E79',
          600: '#9D5561',
          700: '#7D4049',
          800: '#5D2F36',
          900: '#3D1F23',
          950: '#1F1012',
        },
        cream: {
          50: '#FEFDFB',
          100: '#FBF8F4',
          200: '#F7F1E9',
          300: '#EFE3D3',
          400: '#E8DCC8',
          500: '#D4C4A8',
        },
        brown: {
          50: '#F9F6F3',
          100: '#EDE5DC',
          200: '#D9C9B8',
          300: '#C5AD94',
          400: '#A88A6A',
          500: '#8B6B4A',
          600: '#6E5339',
          700: '#513C28',
          800: '#3D2314',
          900: '#2A1810',
          950: '#150C08',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(61, 35, 20, 0.08)',
        'soft-lg': '0 10px 40px -5px rgba(61, 35, 20, 0.12)',
        'soft-xl': '0 20px 60px -10px rgba(61, 35, 20, 0.15)',
        'glow': '0 0 40px rgba(183, 110, 121, 0.15)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}
