/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Vibrant Green (for special elements)
        primary: {
          DEFAULT: '#22C55E', // Emerald Green
          light: '#4ADE80',   // Light Green
          dark: '#16A34A',    // Dark Green
        },
        // Secondary - Rich Red (for CTAs and important buttons)
        secondary: {
          DEFAULT: '#EF4444', // Red
          light: '#F87171',   // Light Red
          dark: '#DC2626',    // Dark Red
        },
        // Accent - Warm Yellow (for highlights)
        accent: {
          DEFAULT: '#F59E0B', // Amber
          light: '#FBBF24',   // Light Amber
          dark: '#D97706',    // Dark Amber
        },
        // Neutral colors (for text and backgrounds)
        neutral: {
          white: '#FFFFFF',
          light: '#F8FAFC',
          DEFAULT: '#64748B',
          dark: '#334155',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 